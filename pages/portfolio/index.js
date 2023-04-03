import React from 'react';
import Head from 'next/head';
import Navbar from '../Navbar'
import ModularPhoto from '../ModularPhoto';
import { portfolioImages } from '../images.js';
import styles from '../../styles/Pages.module.scss';

// TODO: do i want to add a description or something?
export default function Portfolio() {
  return <>
    <Head>
      <title>Abhi Velaga - Photo Portfolio</title>
      <meta property="og:title" content="Abhi Velaga - Photo Portfolio" />

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
      <Navbar activeLink={"PORTFOLIO"} />
      <div className={styles.title}>Photography Portfolio</div>
      {/* <div className={styles.section-subtitle">subtitle goes here</div> */}
      {/* <div className={styles.section-year">2018 - 2019</div> */}
      <div className={styles.photo_mobile_spacer} />
      <ModularPhoto img={portfolioImages[0]} width={1000} padding={false} align={"right"} numColumns={1} />
      <ModularPhoto img={portfolioImages[1]} width={700} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto img={portfolioImages[2]} width={600} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto img={portfolioImages[3]} width={600} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto img={portfolioImages[4]} width={800} padding={true} align={"right"} numColumns={1} />
      <ModularPhoto img={portfolioImages[5]} width={2000} padding={false} align={"center"} numColumns={1} />
      <ModularPhoto img={portfolioImages[6]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={portfolioImages[7]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={portfolioImages[8]} width={600} padding={true} align={"left"} numColumns={1} />
      <ModularPhoto img={portfolioImages[9]} width={1200} padding={true} align={"right"} numColumns={1} />
      <ModularPhoto img={portfolioImages[10]} width={800} padding={true} align={"left"} numColumns={1} />
      <ModularPhoto img={portfolioImages[11]} width={2000} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto img={portfolioImages[12]} width={2000} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto img={portfolioImages[13]} width={700} padding={true} align={"left"} numColumns={1} />
      <ModularPhoto img={portfolioImages[14]} width={600} padding={true} align={"left"} numColumns={1} />
      <ModularPhoto img={portfolioImages[15]} width={600} padding={true} align={"left"} numColumns={2} />
      <ModularPhoto img={portfolioImages[16]} width={500} padding={true} align={"left"} numColumns={2} />
      <ModularPhoto img={portfolioImages[17]} width={1000} padding={true} align={"left"} numColumns={1} />
      <ModularPhoto img={portfolioImages[18]} width={600} padding={true} align={"left"} numColumns={2} />
      <ModularPhoto img={portfolioImages[19]} width={600} padding={true} align={"left"} numColumns={2} />
    </div>
  </>
};