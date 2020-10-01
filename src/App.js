import React from 'react';
import './App.css';
import { Navbar, NameSec, InfoSec, EduSec, ExpSec, ProjSec, ContectSec } from './sections/index';

function App() {
  return (
      <div className="Largest-Container">
      
        <div className="bg-sec">
        </div>
        
        <Navbar />

        <NameSec />

        <InfoSec />

        <ExpSec />

        <EduSec />

        <ProjSec />

        <ContectSec />

    </div>
  );
}

export default App;
