'use client';

import Header from './components/v3/Header';
import Footer from './components/v3/Footer';
import Button from './components/v3/Button';

export default function NotFound() {
  return (
    <div className="v3">
      <Header />
      <section className="v3-hero--center v3-not-found">
        <div className="v3-label">404</div>
        <h1 className="v3-display">Lost?</h1>
        {/* V2's line, kept */}
        <p className="v3-lede">It looks like you&apos;re lost :(</p>
        <div className="v3-actions">
          <Button href="/" variant="primary">Back home</Button>
          <Button href="/about">More about me</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
