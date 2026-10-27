'use client';

import { useState } from 'react';
import Header from '../components/v3/Header';
import Footer from '../components/v3/Footer';
import Button from '../components/v3/Button';
import FadeInOnLoad from '../components/FadeInOnLoad';
import { EMAIL } from '../data/v3';
// import { influences } from '../data/v3';  // with the hidden Influences block below

// Sends through /api/contact (emailed via Resend). If sending fails, the visitor
// sees why and can still email directly.
function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState(''); // honeypot, hidden from people
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, website }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong sending that.');
      setStatus('sent');
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="v3-form v3-form--sent" role="status">
        <p className="v3-form-sent">Message sent. Thanks, {name.split(' ')[0]}.</p>
        <p className="v3-form-note">I'll reply to {email}.</p>
      </div>
    );
  }

  const sending = status === 'sending';
  return (
    <form className="v3-form" onSubmit={onSubmit}>
      <label className="v3-field">
        <span>Name</span>
        <input type="text" name="name" autoComplete="name" maxLength={120} value={name} onChange={(e) => setName(e.target.value)} placeholder="Jordan Lee" required />
      </label>
      <label className="v3-field">
        <span>Email</span>
        <input type="email" name="email" autoComplete="email" maxLength={200} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jordan@studio.com" required />
      </label>
      <label className="v3-field">
        <span>What are you working on?</span>
        <textarea name="message" rows={5} maxLength={5000} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="A rebrand and new site for our shop" required />
      </label>
      <label className="v3-honeypot" aria-hidden="true">
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </label>
      <Button type="submit" variant="primary" size="large" disabled={sending}>
        {sending ? 'Sending…' : 'Send message'}
      </Button>
      {status === 'error' && <p className="v3-form-error" role="alert">{error}</p>}
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
            <p>I'm a creative and software engineer based in Austin, TX.</p>
            <p>I've been pursuing a variety of creative endeavors since I was 15 — from self-produced music albums and fine art photography collections, to interactive LED installations — and most recently my <a href="https://youtube.com/@abhi.velaga" target="_blank" rel="noopener noreferrer">YouTube channel</a> where I'm documenting my car build.</p>
            <p>Regardless of the medium, what I care about most is telling stories and making people feel something.</p>
          </div>
          <FadeInOnLoad cls="v3-about-drums" src="/images/home/medrums.webp" alt="Abhi drumming" />
          <FadeInOnLoad cls="v3-about-portrait" src="/images/home/mecrop.webp" alt="Portrait of Abhi" />
          {/* Career half of the bio, in row 2 beside the portrait */}
          <div className="v3-about-bio v3-about-bio--career">
            <p>Professionally, I'm a senior frontend engineer at Biorce, building our design system from the ground up. Before that, I built and maintained the design system and payment apps at Visa.</p>
            <p>I studied both Computer Science and Studio Art at UT Austin.</p>
          </div>
          {/* Influences: hidden for now while deciding whether to keep the idea
          <div className="v3-about-influences">
            <div className="v3-label">Influences</div>
            <ul className="v3-influence-list">
              {influences.map((name) => <li key={name}>{name}</li>)}
            </ul>
          </div>
          */}
        </div>
      </section>

      <section id="contact" className="v3-section v3-two-col v3-contact">
        <div className="v3-contact-copy">
          {/* Open to anyone (a role, a project, a collaboration); not a services pitch */}
          <p className="v3-contact-line">Interested in working together?</p>
        </div>
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
}
