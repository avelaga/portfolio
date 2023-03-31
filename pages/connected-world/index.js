import React from 'react';
import Navbar from '../layout/Navbar';
// import ScriptTag from 'react-script-tag';

// TODO: react-script-tag doesnt work for react 18, figure out alternative

export default function ConnectedWorld() {
  return (
    <div className="appear">
      <Navbar activeLink={"HOME"} />
      {/* <ScriptTag type="text/javascript" src="sketch.js" /> */}
    </div>
  )
};