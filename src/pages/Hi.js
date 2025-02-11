import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
const axios = require("axios").default;
import hi from '../../dist/images/hi.mp4';
import MediaQuery from 'react-responsive';

const onColor = {
  backgroundColor: 'rgb(0, 212, 0)'
}

const offColor = {
  backgroundColor: 'purple'
}

const errorColor = {
  backgroundColor: 'red'
}

export default function Hi() {
  const [sent, setSent] = useState(false);
  const [on, setOn] = useState(false);
  const [error, setError] = useState(false);

  const buttonClicked = () => {
    setOn(true);
    const url = "https://p3g4inxilgsfwwjcgjdyf4nqzy0bcoia.lambda-url.us-east-1.on.aws/ ";
    axios
      .get(
        url
      )
      .then(res => {
        setSent(true);
        setOn(false);
      })
      .catch(err => {
        setSent(true);
        setOn(false);
      });
  }

  return (
    <div className="page appear">
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"HI"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"HI"} mobile={true} /></MediaQuery>
      <div className="hi">
        <div className="title">say hi to me in realtime</div>
        hi, welcome to my site. clicking this button runs an animation on the led strip at my desk.
        <div className="hi-button" onClick={buttonClicked} style={error ? errorColor : on ? onColor : offColor}>hello</div>
        {sent && <div className="appear">message received</div>}
        {error && <div className="appear">i got an error, it looks like someone broke it :( maybe try again tomorrow</div>}
      </div>
      <div className="flex">
        <video playsInline autoPlay muted loop className="hi-gif">
          <source src={hi} type="video/mp4" />
        </video>
      </div>
    </div>
  )
};