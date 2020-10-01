import React from 'react';
import "./nameSec.css"
import { Loading } from '../../components/loading/loading.main';

export default class NameSec extends React.PureComponent {

  render() {

    return (
      <div className="name-sec">
        <Loading color="white"/>
        <div style={{padding: '5vh'}}>
          Tom Cheng
        </div>
      </div>
    );
  }
}

