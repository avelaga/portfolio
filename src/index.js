import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './fonts/Berthold-Akzidenz-Grotesk-BE-Li.otf';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import ScriptTag from 'react-script-tag';
import Lenis from 'lenis'


// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

ReactDOM.render(
  <BrowserRouter>
    <ScriptTag type="text/javascript" src="sketch.js"/>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
