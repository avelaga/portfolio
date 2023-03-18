import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Miami from './pages/photo/Miami.js';
import Portfolio from './pages/photo/Portfolio.js';
import UserVoid from './pages/photo/UserVoid.js';
import Published from './pages/photo/Published.js';
import Software from './pages/Software.js';
import Music from './pages/Music.js';
import Hi from './pages/Hi.js';
import Navbar from './layout/Navbar';
import ConnectedWorld from './pages/ConnectedWorld.js';
import MediaQuery from 'react-responsive'
import './App.scss';

const ErrorPage = () => {
  return (
    <div>
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"ERROR"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"ERROR"} mobile={true} /></MediaQuery>
      <div className="error" >
        <div className="error-text">It looks like you're lost :(</div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Switch>
      <Route exact path='/' exact component={Home} />
      <Route exact path='/about' exact component={About} />
      {/* /photo is legacy link */}
      <Route exact path='/photo' exact component={Portfolio} />
      <Route exact path='/portfolio' exact component={Portfolio} />
      <Route exact path='/miamivice' exact component={Miami} />
      <Route exact path='/uservoid' exact component={UserVoid} />
      <Route exact path='/published' exact component={Published} />
      <Route exact path='/software' exact component={Software} />
      <Route exact path='/music' exact component={Music} />
      <Route exact path='/hi' exact component={Hi} />
      <Route exact path='/connected-world' exact component={ConnectedWorld} />
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default App;
