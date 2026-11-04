'use client';

import React, { useState } from 'react';
import Header from '../components/v3/Header';
import Footer from '../components/v3/Footer';
import Button from '../components/v3/Button';

export default function Hi() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const buttonClicked = () => {
    setLoading(true);
    setStatus(null);
    const url = "https://hi-led-worker.abvelaga.workers.dev";
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(res.status);
        setLoading(false);
        setStatus("message received :)");
      })
      .catch(err => {
        console.log("god dang it who broke it now");
        setLoading(false);
        setStatus("i got an error, it looks like someone broke it :( maybe try again tomorrow");
      });
  };

  return (
    <div className="v3">
      <section className="v3-hero v3-hero--photo v3-hero--center">
        <Header active="hi" />
        <div className="v3-hi">
          {/* Copy is V2's, word for word */}
          <h1 className="v3-display v3-hi-title">say hi to me in realtime</h1>
          <p className="v3-lede">hi, welcome to my site. clicking this button runs an animation on the led strip at my desk</p>
          <video playsInline autoPlay muted loop className="v3-hi-video">
            <source src="/videos/hi.mp4" type="video/mp4" />
          </video>
          <Button
            variant="primary"
            size="large"
            className={loading ? "v3-button--sending" : ""}
            disabled={loading}
            onClick={buttonClicked}
          >
            {loading ? "sending..." : "HELLO"}
          </Button>
          <p className="v3-hi-status" aria-live="polite">
            {status}
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
