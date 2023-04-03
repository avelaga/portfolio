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
  return (<>
    <Head>
      <title>Abhi Velaga - Say Hi</title>
      <meta property="og:title" content="Abhi Velaga" />
  
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      <link rel="stylesheet" href="https://bootswatch.com/4/cosmo/bootstrap.min.css" />
      <meta charset="UTF-8" />
  
      <meta property="og:image" content="images/home/room.jpg" />
      <meta property="og:site_name" content="Software Developer, Musician, Artist" />
      <meta property="og:description" content="Software Developer, Musician, Artist" />
      <meta name="description" content="Software Developer, Musician, Artist" />
  
      <meta property="og:url" content="https://abhi.work" />
      <meta name="keywords" content="Abhinav Velaga, UT Austin, Indulgent, Raspberry Pi, Rock Music, Film Photography, Electronics, Arduino, Art, Kodak, Portra, Nikon, Bronica, KVRX, Computer Science, Developer, Shivering Demons, Caladan, SXSW" />
      <meta name="author" content="Abhi Velaga" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content="Software Developer, Musician, Artist" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-165347174-1"></script>
  
       {/* TODO: verify this is thew correct syntax for adding analytics in Next */}
      {/* <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments) }
        gtag('js', new Date());
        gtag('config', 'UA-165347174-1');
      </script> */}
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/p5@1.3.1/lib/p5.min.js" />
    </Head>

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
    </>
  )
};