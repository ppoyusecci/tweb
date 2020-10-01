import React from 'react';
import "./eduSec.css"

export default class EduSec extends React.PureComponent {

  render() {
    return (
        <div className="edu-sec">
          <div className="headline" style={{color: 'rgba(88, 4, 4, 0.9)'}}>Education</div>

          <div className="row-container" style={{width: '80%', justifyContent: 'space-evenly'}}>

            <div className='small-headline edu-date'>2016 - 2020</div>

            <div className="col-container" style={{alignItems: 'flex-start', fontFamily: 'sans-serif'}}>
              <div className='small-headline' style={{paddingBottom: '30px'}}>The Hong Kong University of Science and Technology</div>

              <div className='small-headline' style={{color: 'rgba(60, 60, 60, 1)'}}>Beng in Computer Science</div>
            </div>

          </div>

        </div>
    );
  }
}
