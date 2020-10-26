import React from 'react';
import "./nameSec.css"
import { Loading } from '../../components/loading/loading.main';

export default class NameSec extends React.PureComponent {

  render() {

    return (
      <div className="name-sec">
        
        <div className="name">


          <div className="word">
            <div className="t">T</div>
            <div className="o">O</div>
            <div className="m">M</div>
          </div>

        </div>
      </div>
    );
  }
}

