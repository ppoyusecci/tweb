import React from 'react';
import "./nameSec.css"
import { Loading } from '../../components/loading/loading.main';

export default class NameSec extends React.PureComponent {

  render() {

    return (
      <div className="name-sec">
        <Loading color="rgb(68, 78, 88)"/>
        <div style={{padding: '5vh', display: 'flex'}}>
          <div className="t">T</div>
          <div className="o">O</div>
          <div className="m">M</div>
          <div style={{padding: '2vw'}}></div>
          <div className="c">C</div>
          <div className="h">H</div>
          <div className="e">E</div>
          <div className="n">N</div>
          <div className="g">G</div>
        </div>
      </div>
    );
  }
}

