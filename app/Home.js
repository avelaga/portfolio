'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { saveHomeSpot, takeReturnSpot } from './lib/homeReturn';
import { scrollToY } from './lib/scroll';
import Header from './components/v3/Header';
import Footer from './components/v3/Footer';
import HeroSlideshow from './components/v3/HeroSlideshow';
import ProjectRow from './components/v3/ProjectRow';
import { heroSlides, projects } from './data/v3';

// Title bars are transparent (the dot grid shows through), so the stack does its
// own masking on scroll: each card's content is trimmed where it passes under a
// stuck bar above it, and a bar is trimmed where a later bar slides over it in
// the shared last slot. Sides stay open for the hover invert's bleed.
function useStackClip(sectionRef) {
  useEffect(() => {
    // Touch devices: momentum scrolling runs ahead of any script, so the mask
    // would lag on a fast flick. There the bars are solid instead (v3.scss).
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;
    const section = sectionRef.current;
    const headers = [...section.querySelectorAll('.v3-row-header')];
    const bodies = [...section.querySelectorAll('.v3-row-body')];
    const update = () => {
      const h = headers.map((el) => el.getBoundingClientRect());
      let coverBottom = -Infinity;
      headers.forEach((el, i) => {
        // Bars below in the stack only ever overlap this one from beneath
        const nextTop = Math.min(...h.slice(i + 1).map((r) => r.top), Infinity);
        const hidden = Math.max(0, Math.min(h[i].height, h[i].bottom - nextTop));
        el.style.clipPath = hidden ? `inset(0 -100px ${hidden}px -100px)` : '';

        coverBottom = Math.max(coverBottom, h[i].bottom - hidden);
        const bodyTop = bodies[i].getBoundingClientRect().top;
        const covered = Math.max(0, coverBottom - bodyTop);
        bodies[i].style.clipPath = covered ? `inset(${covered}px -100px 0 -100px)` : '';
      });
    };

    // Run straight from the scroll event (not deferred to the next frame) so the
    // mask moves in the same frame as the sticky bars
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [sectionRef]);
}

// Visual hierarchy in the stack: the card being read (the lowest stuck bar) stays
// bright, and every bar stacked above it dims. Bars not yet stuck are untouched.
function useStackFocus(sectionRef) {
  useEffect(() => {
    const headers = [...sectionRef.current.querySelectorAll('.v3-row-header')];
    const update = () => {
      // A bar is stuck once it reaches (or, as the stack releases, passes) its slot
      const stuck = headers.map((h) => h.getBoundingClientRect().top <= parseFloat(getComputedStyle(h).top) + 1);
      const current = stuck.lastIndexOf(true);
      headers.forEach((h, i) => h.classList.toggle('is-stacked', stuck[i] && i < current));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [sectionRef]);
}

// Phones: the stack holds three bars. Each new card's bar slides into the bottom
// slot and pushes the deck up one; the top bar slides under the strip behind the
// header while its title shrinks and fades (the bar itself stays solid, so the
// card beneath never shows through). Built as scroll-driven CSS animations (keyframes measured here from the
// layout), so the deck moves with the scroll itself, even mid-flick on iOS.
// Without scroll-driven animation support, phones keep the full stack.
function useStackDeck(sectionRef) {
  useEffect(() => {
    if (!CSS.supports('animation-timeline: scroll()')) return;
    const phone = window.matchMedia('(max-width: 600px)');
    const section = sectionRef.current;
    const sheet = document.createElement('style');
    document.head.appendChild(sheet);

    const build = () => {
      frame = 0;
      if (!phone.matches) {
        sheet.textContent = '';
        return;
      }
      // Measure the bars where they sit in the page, not stuck or animated
      section.classList.add('is-measuring');
      const headers = [...section.querySelectorAll('.v3-row-header')];
      const css = getComputedStyle(section);
      const stackTop = parseFloat(css.getPropertyValue('--stack-top')) || 0;
      const slots = parseInt(css.getPropertyValue('--stack-slots'), 10);
      const h = headers[0].offsetHeight;
      const tops = headers.map((el) => el.getBoundingClientRect().top + window.scrollY);
      section.classList.remove('is-measuring');

      // Scroll position at which bar j settles into its slot
      const settle = tops.map((top, j) => top - stackTop - Math.min(j, slots) * h);
      const rules = [];

      headers.forEach((el, i) => {
        // Every later bar that arrives in the bottom slot pushes this one up a slot,
        // over the last h pixels of its approach. The push that takes it off the
        // top slot also shrinks and fades it.
        const points = [];
        let shift = 0;
        for (let j = Math.max(slots + 1, i + 1); j < headers.length; j++) {
          const leaving = shift === Math.min(i, slots);
          const from = { at: settle[j] - h, y: -shift * h, o: 1, s: 1 };
          shift += 1;
          points.push(from, { at: settle[j], y: -shift * h, o: leaving ? 0 : 1, s: leaving ? 0.85 : 1 });
          if (leaving) break;
        }
        if (!points.length) return;
        const start = points[0].at;
        const end = points[points.length - 1].at;
        const at = (p) => `${(((p.at - start) / (end - start)) * 100).toFixed(3)}%`;
        const bar = `#${CSS.escape(el.parentElement.id)} > .v3-row-header`;
        const timing = `linear both; animation-timeline: scroll(root); animation-range: ${start}px ${end}px`;
        rules.push(`@keyframes v3-deck-${i} { ${points.map((p) => `${at(p)} { transform: translateY(${p.y}px); }`).join(' ')} }`);
        rules.push(`@keyframes v3-deck-${i}-text { ${points.map((p) => `${at(p)} { transform: scale(${p.s}); opacity: ${p.o}; }`).join(' ')} }`);
        rules.push(`${bar} { animation: v3-deck-${i} ${timing}; }`);
        // (not the hover sweep, which has its own transform)
        rules.push(`${bar} > :not(.v3-row-sweep) { transform-origin: left center; animation: v3-deck-${i}-text ${timing}; }`);
      });

      // The strip above the deck, behind the fixed header, fills in once the first
      // bar settles, so cards leaving the deck don't show above it
      rules.push(`@keyframes v3-deck-band { from { opacity: 0; } to { opacity: 1; } }`);
      rules.push(`.v3-stack-band { animation: v3-deck-band linear both; animation-timeline: scroll(root); animation-range: ${settle[0] - 1}px ${settle[0]}px; }`);
      sheet.textContent = rules.join('\n');
    };

    let frame = 0;
    const schedule = () => { if (!frame) frame = requestAnimationFrame(build); };
    // Card heights change as photos load, which moves every arrival point
    const observer = new ResizeObserver(schedule);
    observer.observe(section);
    phone.addEventListener('change', schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      phone.removeEventListener('change', schedule);
      sheet.remove();
    };
  }, [sectionRef]);
}

// Scroll so card i's content sits just under its title bar, in slot min(i, slots)
function scrollToRow(section, index, immediate = false) {
  // The bar height adapts to the window (see .v3-featured), so measure it
  const headerHeight = section.querySelector('.v3-row-header').offsetHeight;
  // Where the stack starts (below the fixed header, when there is one)
  const css = getComputedStyle(section);
  const stackTop = parseFloat(css.getPropertyValue('--stack-top')) || 0;
  // Phones cap the stack at a few slots (useStackDeck); elsewhere it holds every card
  const slots = parseInt(css.getPropertyValue('--stack-slots'), 10);
  const slot = Number.isNaN(slots) ? index : Math.min(index, slots);
  const body = section.querySelectorAll('.v3-row-body')[index];
  scrollToY(body.getBoundingClientRect().top + window.scrollY - stackTop - (slot + 1) * headerHeight, immediate);
}

export default function Home() {
  const featuredRef = useRef(null);
  useStackClip(featuredRef);
  useStackFocus(featuredRef);
  useStackDeck(featuredRef);

  // Leaving for another page: remember where on the home page the visitor was
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href]');
      if (!a || a.target === '_blank' || a.origin !== window.location.origin || a.pathname === '/') return;
      const hero = document.querySelector('.v3-hero--home');
      saveHomeSpot(window.scrollY, window.scrollY < hero.offsetHeight / 2);
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  // Coming back via a project page's back link: return to exactly where they were.
  // Without a saved spot (e.g. they arrived on the project page directly), land on
  // that project's card from the /#project-id link. Deferred so it runs after the
  // layout's scroll-to-top on navigation.
  useEffect(() => {
    // The one-use flag is read inside the timer: React's dev mode runs effects
    // twice and cancels the first run, so reading it here would spend it early
    const timer = setTimeout(() => {
      const spot = takeReturnSpot();
      const index = projects.findIndex((p) => p.id === window.location.hash.slice(1));
      if (spot) scrollToY(spot.y, true);
      else if (index >= 0) scrollToRow(featuredRef.current, index, true);
    }, 60);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log(" _____                                   \r\n|_   _|                                  \r\n  | |                                    \r\n  | |                                    \r\n _| |_                                   \r\n \\___\/                                   \r\n                                         \r\n                                         \r\n                                         \r\n                                         \r\n ___  ___  ___                           \r\n\/ __|\/ _ \\\/ _ \\                          \r\n\\__ \\  __\/  __\/                          \r\n|___\/\\___|\\___|                          \r\n                                         \r\n                                         \r\n                                         \r\n                                         \r\n _   _  ___  _   _                       \r\n| | | |\/ _ \\| | | |                      \r\n| |_| | (_) | |_| |                      \r\n \\__, |\\___\/ \\__,_|                      \r\n  __\/ |                                  \r\n |___\/                                   \r\n                      _    _             \r\n                     | |  (_)            \r\n ___ _ __   ___  __ _| | ___ _ __   __ _ \r\n\/ __| \'_ \\ \/ _ \\\/ _` | |\/ \/ | \'_ \\ \/ _` |\r\n\\__ \\ | | |  __\/ (_| |   <| | | | | (_| |\r\n|___\/_| |_|\\___|\\__,_|_|\\_\\_|_| |_|\\__, |\r\n                                    __\/ |\r\n                                   |___\/ \r\n _                                       \r\n(_)                                      \r\n _ _ __                                  \r\n| | \'_ \\                                 \r\n| | | | |                                \r\n|_|_| |_|                                \r\n                                         \r\n                                         \r\n _   _                                   \r\n| | | |                                  \r\n| |_| |__   ___                          \r\n| __| \'_ \\ \/ _ \\                         \r\n| |_| | | |  __\/                         \r\n \\__|_| |_|\\___|                         \r\n                                         \r\n                                         \r\n                           _             \r\n                          | |            \r\n  ___ ___  _ __  ___  ___ | | ___        \r\n \/ __\/ _ \\| \'_ \\\/ __|\/ _ \\| |\/ _ \\       \r\n| (_| (_) | | | \\__ \\ (_) | |  __\/       \r\n \\___\\___\/|_| |_|___\/\\___\/|_|\\___|       \r\n                                         \r\n                                         \r\n  ______                                 \r\n _|  _  \\                                \r\n(_) | | |                                \r\n  | | | |                                \r\n _| |\/ \/                                 \r\n(_)___\/                                  \r\n                                         \r\n                                         ");
  }, []);

  return (
    <div className="v3">
      <section className="v3-hero v3-hero--home">
        <HeroSlideshow slides={heroSlides} />
        <div className="v3-scrim" />
        <Header />
      </section>

      {/* The montage speaks for itself; one plain sentence waits beneath it. The name
          stays small in the nav, the way artists' sites do it (see V3-ethos.md) */}
      <section className="v3-section v3-home-intro">
        <h1 className="v3-visually-hidden">Abhi Velaga</h1>
        <p className="v3-intro-line v3-intro-links">
          I make <Link href="/music/indulgent">records</Link>, <Link href="/portfolio">photographs</Link>, <Link href="/the-world-misses-you">light installations</Link> and <Link href="/resume">software</Link> in Austin. Lately, I'm <a href="https://www.youtube.com/@abhi.velaga/" target="_blank" rel="noopener noreferrer">rebuilding a car</a>.
        </p>
      </section>

      <section ref={featuredRef} className="v3-section v3-featured" style={{ '--rows': projects.length }}>
        <div className="v3-stack-band" aria-hidden="true" />
        <div className="v3-section-header">
          <h2 className="v3-label">Portfolio</h2>
        </div>
        {projects.map((project, i) => (
          <ProjectRow
            key={project.id}
            project={project}
            index={i}
            imageSide={i % 2 === 0 ? 'left' : 'right'}
            onSelect={() => scrollToRow(featuredRef.current, i)}
          />
        ))}
      </section>

      <Footer />
    </div>
  );
}
