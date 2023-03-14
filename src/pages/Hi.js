import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
const axios = require("axios").default;
import hi from '../../dist/images/hi.mp4';
import MediaQuery from 'react-responsive';

const onColor = {
  backgroundColor: 'rgb(0, 212, 0)'
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
    const url = "https://abhivelaga.com/led";
    axios
      .get(
        url
      )
      .then(res => {
        setSent(true);
        setOn(false);
      })
      .catch(err => {
        console.log("god dang it who broke it now")
        setError(true);
      });
  }

  return (
    <div className="page-flex">
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"HI"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"HI"} mobile={true} /></MediaQuery>
      <div className="appear page">
      <div>
        <div className="hi-titles-container">
          <div className="hi-title">say hi to me in realtime</div>
          <div className="hi-subtitle">hi, welcome to my site. clicking this button runs an animation on the led strip at my desk</div>
        </div>
        <div className="hi-body">
          <div className="hi-button" onClick={buttonClicked} 
          // style={error ? errorColor : on ? onColor : offColor}
          >HELLO</div>
          {sent && <div className="appear">message received</div>}
          {error && <div className="appear">i got an error, it looks like someone broke it :( maybe try again tomorrow</div>}
          <video playsInline autoPlay muted loop className="hi-gif">
            <source src={hi} type="video/mp4" />
          </video>
        </div>
      </div>
      </div>
    </div>
  )
};