'use client';

import { useEffect, useRef } from 'react';
import Header from './components/v3/Header';
import Footer from './components/v3/Footer';
import HeroSlideshow from './components/v3/HeroSlideshow';
import ProjectRow from './components/v3/ProjectRow';
import Button from './components/v3/Button';
import { heroSlides, projects } from './data/v3';

// Each sticky card lets go when the section's end reaches its stuck bottom edge.
// Cards stuck lower in the stack would let go first and slide up over the others,
// so pad every card out (bottom margin, cancelled by the next card's top margin)
// until they all let go together and the stack scrolls away as one.
function useStackRelease(sectionRef) {
  useEffect(() => {
    const section = sectionRef.current;
    const rows = [...section.querySelectorAll('.v3-row')];

    const update = () => {
      const headerHeight = parseFloat(getComputedStyle(section).getPropertyValue('--row-header'));
      const bottoms = rows.map((row, i) => i * headerHeight + row.offsetHeight);
      const release = Math.max(...bottoms);
      rows.forEach((row, i) => {
        const pad = release - bottoms[i];
        row.style.marginBottom = `${pad}px`;
        if (rows[i + 1]) rows[i + 1].style.marginTop = `${-pad}px`;
      });
    };

    update();
    const observer = new ResizeObserver(update);
    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, [sectionRef]);
}

// Cards are transparent so the dot grid shows through, so a card can't hide the one
// it slides over. Instead, trim each card's bottom wherever the next card covers it.
// Sides are left open so the hover invert can still bleed into the margin.
function useStackClip(sectionRef) {
  useEffect(() => {
    const rows = [...sectionRef.current.querySelectorAll('.v3-row')];
    let frame = 0;

    const update = () => {
      frame = 0;
      const rects = rows.map((row) => row.getBoundingClientRect());
      rows.forEach((row, i) => {
        const next = rects[i + 1];
        const covered = next ? Math.max(0, rects[i].bottom - next.top) : 0;
        row.style.clipPath = covered ? `inset(0 -100px ${covered}px -100px)` : '';
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [sectionRef]);
}

// Scroll so card i sits in its stacked spot with its body showing. Sticky cards
// report their stuck position, so work out where card i sits in normal flow:
// the first card's spot plus the heights of every card before it (the release
// margins cancel out between cards).
// Steep in-out so the slow start and soft landing are clearly felt
const easeInOutQuint = (t) => (t < 0.5 ? 16 * t ** 5 : 1 - Math.pow(-2 * t + 2, 5) / 2);

function scrollToRow(section, index, immediate = false) {
  const rows = [...section.querySelectorAll('.v3-row')];
  const headerHeight = parseFloat(getComputedStyle(section).getPropertyValue('--row-header'));
  const sectionHeader = section.querySelector('.v3-section-header');
  const firstRowTop = section.getBoundingClientRect().top + window.scrollY + sectionHeader.offsetHeight;
  const rowTop = rows.slice(0, index).reduce((top, row) => top + row.offsetHeight, firstRowTop);
  const target = rowTop - index * headerHeight;
  if (window.lenis) {
    // Lenis caches the page height; after navigating from a shorter page its
    // scroll limit is stale and would clamp the jump short
    window.lenis.resize();
    window.lenis.scrollTo(target, immediate ? { immediate: true } : { duration: 1.6, easing: easeInOutQuint });
  } else {
    window.scrollTo({ top: target, behavior: immediate ? 'auto' : 'smooth' });
  }
}

export default function Home() {
  const featuredRef = useRef(null);
  useStackRelease(featuredRef);
  useStackClip(featuredRef);

  // Coming back from a project page ("← Featured work" links to /#project-id):
  // land on that card in its stacked spot. Deferred so it runs after the layout's
  // scroll-to-top on navigation.
  useEffect(() => {
    const index = projects.findIndex((p) => p.id === window.location.hash.slice(1));
    if (index < 0) return;
    const timer = setTimeout(() => scrollToRow(featuredRef.current, index, true), 60);
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
        <div className="v3-intro">
          <h1 className="v3-display">A creative<br />who builds.</h1>
          <p className="v3-lede">I'm Abhi, based in Austin. I've released albums, shot for magazines, exhibited installations, and engineered design systems used by millions.</p>
          <p className="v3-lede">I bring brands to life online, with design, engineering and direction under one roof.</p>
          <div className="v3-actions">
            <Button href="/about#contact" variant="primary">Get in touch</Button>
            <Button href="/about">More about me</Button>
          </div>
        </div>
      </section>

      <section ref={featuredRef} className="v3-section v3-featured">
        <div className="v3-section-header">
          <div className="v3-label">Featured work</div>
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

      <section className="v3-section v3-cta">
        <p className="v3-cta-line">Have something in mind? Let's make it.</p>
        <Button href="/about#contact" variant="primary" size="large">About and contact</Button>
      </section>

      <Footer />
    </div>
  );
}
