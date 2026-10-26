'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/v3/Header';
import Footer from '../components/v3/Footer';
import Button from '../components/v3/Button';
import FadeInOnLoad from '../components/FadeInOnLoad';
import { EMAIL, credits, disciplines } from '../data/v3';

// Only the ways to find me that the nav and footer don't already cover
const aboutLinks = [
  { label: EMAIL, href: `mailto:${EMAIL}` },
  { label: '@abhi.film', href: 'https://www.instagram.com/abhi.film/' },
  { label: 'GitHub', href: 'https://www.github.com/avelaga/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/abhivelaga' },
];

// No form backend yet: the draft opens a prefilled email instead.
function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${name || 'abhi.work'}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="v3-form" onSubmit={onSubmit}>
      <label className="v3-field">
        <span>Name</span>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jordan Lee" required />
      </label>
      <label className="v3-field">
        <span>Email</span>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jordan@studio.com" required />
      </label>
      <label className="v3-field">
        <span>What are you working on?</span>
        <textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="A rebrand and new site for our shop" required />
      </label>
      <Button type="submit" variant="primary" size="large">Send message</Button>
      <p className="v3-form-note">Or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
    </form>
  );
}

export default function About() {
  return (
    <div className="v3">
      {/* V2's offset grid: three photos and the bio staggered across a 12-column grid */}
      <section className="v3-about">
        <Header active="about" />
        <h1 className="v3-visually-hidden">About Abhi Velaga</h1>
        <div className="v3-about-grid">
          <FadeInOnLoad cls="v3-about-live" src="/images/music/indulgent/indulgentlive.webp" alt="Indulgent performing live" />
          <div className="v3-about-bio">
            <p>I'm a creative and engineer based in Austin. Since I was 15 I've been making things across every medium I can get my hands on: self-produced albums, film photography, interactive LED installations, and most recently a <a href="https://youtube.com/@abhi.velaga" target="_blank" rel="noopener noreferrer">YouTube channel</a> documenting my car build.</p>
            <p>The medium changes, but the throughline doesn't. Whether it's a record, a photo series or a website, I'm telling a story and trying to make someone feel something.</p>
            <p>By day I'm a senior frontend engineer at Biorce, building our design system from the ground up. Before that I built and maintained the design system and payment apps at Visa. I studied Computer Science and Studio Art at UT Austin.</p>
          </div>
          <FadeInOnLoad cls="v3-about-drums" src="/images/home/medrums.webp" alt="Abhi drumming" />
          <FadeInOnLoad cls="v3-about-portrait" src="/images/home/mecrop.webp" alt="Portrait of Abhi" />
          <ul className="v3-about-links">
            {aboutLinks.map((l) => (
              <li key={l.label}>
                {l.internal
                  ? <Link href={l.href}>{l.label}</Link>
                  : <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="v3-section v3-two-col">
        <div>
          <div className="v3-label">Disciplines</div>
          <ul className="v3-disciplines">
            {disciplines.map((d) => <li key={d}>{d}</li>)}
          </ul>
        </div>
        <div>
          <div className="v3-label">Selected credits</div>
          <ul className="v3-credits">
            {credits.map((c) => (
              <li key={c.label}><span>{c.label}</span><span className="v3-credit-year">{c.year}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="v3-section v3-two-col v3-contact">
        <div className="v3-contact-copy">
          <div className="v3-label">Contact</div>
          <p className="v3-contact-line">Brand, web and digital direction for small and boutique businesses.</p>
          <p className="v3-muted">Tell me a little about your project, your timeline, and where you are now.</p>
        </div>
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
}
