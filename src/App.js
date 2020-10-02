import React from 'react';
import './App.css';
import { Navbar, NameSec, InfoSec, EduSec, ExpSec, ProjSec, ContectSec } from './sections/index';

function App() {
  return (
      <div className="Largest-Container">
        
        <Navbar />

        <NameSec />

        <div id="infoSec" />
        <InfoSec />

        <div id="expSec" />
        <ExpSec />

        <div id="eduSec" />
        <EduSec />

        <div id="projSec" />
        <ProjSec />

        <div id="contactSec" />
        <ContectSec />

    </div>
  );
}

export default App;
