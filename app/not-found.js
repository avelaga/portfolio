'use client';

import React from 'react';
import Navbar from './components/Navbar';

export default function NotFound() {
  return (
    <div>
      <Navbar activeLink={"ERROR"} />
      <div className="error">
        <div className="error-text">It looks like you&apos;re lost :(</div>
      </div>
    </div>
  );
}
