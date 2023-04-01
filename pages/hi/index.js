import React, {useState} from "react";
import Head from 'next/head';
import Image from 'next/image'
import Navbar from '../Navbar'
const axios = require("axios").default;
import styles from '../../styles/Pages.module.scss';

const onColor = {
  backgroundColor: 'rgb(0, 212, 0)'
}

const errorColor = {
  backgroundColor: 'red'
}

// TODO: horizontal scroll bar when width is made small on desktop

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
// TODO: style completed/error message
  return (
    <div className={styles.page}>
      <Navbar activeLink={"HI"} />
      <div>
        <div className={styles.hi_titles_container}>
          <div className={styles.title}>say hi to me in realtime</div>
          <div className={styles.section_subtitle}>hi, welcome to my site. clicking this button runs an animation on the led strip at my desk</div>
        </div>
        <div className={styles.hi_body}>
          <div className={styles.hi_button} onClick={buttonClicked} 
          // style={error ? errorColor : on ? onColor : offColor}
          >HELLO</div>
          {sent && <div className={styles.appear}>message received</div>}
          {error && <div className={styles.appear}>i got an error, it looks like someone broke it :( maybe try again tomorrow</div>}
          <video playsInline autoPlay muted loop className={styles.hi_gif}>
            <source src="/images/hi.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
};