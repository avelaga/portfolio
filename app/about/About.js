'use client';

import { useState } from 'react';
import Header from '../components/v3/Header';
import Footer from '../components/v3/Footer';
import Button from '../components/v3/Button';
import FadeInOnLoad from '../components/FadeInOnLoad';
// import { influences } from '../data/v3';  // with the hidden Influences block below

// Sends through /api/contact (emailed via Resend). If sending fails, the visitor
// sees why.
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
        <input type="text" name="name" autoComplete="name" maxLength={120} value={name} onChange={(e) => setName(e.target.value)} placeholder="name" required />
      </label>
      <label className="v3-field">
        <span>Email</span>
        <input type="email" name="email" autoComplete="email" maxLength={200} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" required />
      </label>
      <label className="v3-field">
        <span>Message</span>
        <textarea name="message" rows={4} maxLength={5000} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required />
      </label>
      <label className="v3-honeypot" aria-hidden="true">
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </label>
      <Button type="submit" variant="primary" disabled={sending}>
        {sending ? 'Sending…' : 'Send message'}
      </Button>
      {status === 'error' && <p className="v3-form-error" role="alert">{error}</p>}
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
            <p>I've been making things since I was 15: self-produced albums, fine art photography, interactive LED installations, and most recently a <a href="https://youtube.com/@abhi.velaga" target="_blank" rel="noopener noreferrer">YouTube channel</a> documenting my car build. Whatever the medium, what I care about most is telling stories and making people feel something.</p>
            <p>Professionally, I'm a senior frontend engineer at Biorce, building our design system from the ground up. Before that, I built the design system and payment apps at Visa. I studied Computer Science and Studio Art at UT Austin.</p>
          </div>
          <FadeInOnLoad cls="v3-about-drums" src="/images/home/medrums.webp" alt="Abhi drumming" />
          <FadeInOnLoad cls="v3-about-portrait" src="/images/home/mecrop.webp" alt="Portrait of Abhi" />
          {/* Contact: a small note in row 2, beside the portrait and under the bio, set
              like the bio; an invitation, not a call to action (see V3-ethos.md).
              Open to anyone: a role, a project, a collaboration. */}
          <div id="contact" className="v3-about-contact">
            <p>Interested in working together?</p>
            <ContactForm />
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

      <Footer />
    </div>
  );
}
