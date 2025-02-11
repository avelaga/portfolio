import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
import MediaQuery from 'react-responsive';

export default function Youtube() {
  return (
    <div className="page">
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"YOUTUBE"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"YOUTUBE"} mobile={true} /></MediaQuery>
      <div>
       i mek video go burr
      </div>
    </div>
  )
};