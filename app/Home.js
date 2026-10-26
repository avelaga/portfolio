'use client';

import { useEffect, useRef } from 'react';
import Header from './components/v3/Header';
import Footer from './components/v3/Footer';
import HeroSlideshow from './components/v3/HeroSlideshow';
import ProjectRow from './components/v3/ProjectRow';
import Button from './components/v3/Button';
import { heroSlides, projects } from './data/v3';

const easeInOutQuint = (t) => (t < 0.5 ? 16 * t ** 5 : 1 - Math.pow(-2 * t + 2, 5) / 2);

// Title bars are transparent (the dot grid shows through), so the stack does its
// own masking on scroll: each card's content is trimmed where it passes under a
// stuck bar above it, and a bar is trimmed where a later bar slides over it in
// the shared last slot. Sides stay open for the hover invert's bleed.
function useStackClip(sectionRef) {
  useEffect(() => {
    const section = sectionRef.current;
    const headers = [...section.querySelectorAll('.v3-row-header')];
    const bodies = [...section.querySelectorAll('.v3-row-body')];
    let frame = 0;

    const update = () => {
      frame = 0;
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

// Scroll so card i's content sits just under its title bar, in slot min(i, slots)
function scrollToRow(section, index, immediate = false) {
  // The bar height adapts to the window (see .v3-featured), so measure it
  const headerHeight = section.querySelector('.v3-row-header').offsetHeight;
  const body = section.querySelectorAll('.v3-row-body')[index];
  scrollToY(body.getBoundingClientRect().top + window.scrollY - (index + 1) * headerHeight, immediate);
}

function scrollToY(target, immediate) {
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

      <section ref={featuredRef} className="v3-section v3-featured" style={{ '--rows': projects.length }}>
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
