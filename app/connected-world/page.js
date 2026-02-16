'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import MediaQuery from 'react-responsive';
import Script from 'next/script';

export default function ConnectedWorld() {
  return (
    <div className="appear">
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"HOME"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"HOME"} mobile={true} /></MediaQuery>
      <Script type="text/javascript" src="/sketch.js" strategy="afterInteractive" />
    </div>
  );
}
