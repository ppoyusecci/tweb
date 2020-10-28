import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import { Navbar, NameSec, InfoSec, EduSec, ExpSec, ProjSec, ContectSec } from './sections/index';

const  app = 
<div className="largest-container">
        <Navbar />
        <NameSec />
        <div id="infoSec"></div>
        <InfoSec />
        <div id="expSec"></div>
        <ExpSec />
        <div id="projSec"></div>
        <ProjSec />
        <ContectSec />
</div>;

ReactDOM.render(app, document.getElementById("root"))