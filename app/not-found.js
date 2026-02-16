'use client';

import React from 'react';
import MediaQuery from 'react-responsive';
import Navbar from './components/Navbar';

export default function NotFound() {
  return (
    <div>
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"ERROR"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"ERROR"} mobile={true} /></MediaQuery>
      <div className="error">
        <div className="error-text">It looks like you&apos;re lost :(</div>
      </div>
    </div>
  );
}
