'use client';

import React, { useState } from 'react';
import Navbar from '../../src/components/Navbar';
import MediaQuery from 'react-responsive';
import axios from 'axios';

export default function Hi() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const buttonClicked = () => {
    setLoading(true);
    setStatus(null);
    const url = "https://p3g4inxilgsfwwjcgjdyf4nqzy0bcoia.lambda-url.us-east-1.on.aws/";
    axios
      .get(url)
      .then(res => {
        setLoading(false);
        setStatus("message recieved :)");
      })
      .catch(err => {
        console.log("god dang it who broke it now");
        setLoading(false);
        setStatus("i got an error, it looks like someone broke it :( maybe try again tomorrow");
      });
  };

  return (
    <div className="page">
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"HI"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"HI"} mobile={true} /></MediaQuery>
      <div>
        <div className="hi-titles-container">
          <div className="title">say hi to me in realtime</div>
          <div className="section-subtitle">hi, welcome to my site. clicking this button runs an animation on the led strip at my desk</div>
        </div>
        <div className="hi-body">
          <div className="hi-button-parent">
            <button
              type="submit"
              disabled={loading}
              className={loading ? "hi-button sending": "hi-button"}
              onClick={buttonClicked}
            >
              {loading ? "sending..." : "HELLO"}
            </button>
            {!status && <div className="appear msg-success"></div>}
            {status && <div className="appear msg-success">{status}</div>}
          </div>
          <video playsInline autoPlay muted loop className="hi-gif">
            <source src="/videos/hi.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
