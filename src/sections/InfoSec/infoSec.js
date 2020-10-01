import React from 'react';
import "./infoSec.css"
import sp from '../../images/self-pic.jpg';

export default class InfoSec extends React.PureComponent {

  render() {

    return (
        <div className="info-sec">

          <div className="headline">Tom, Data Scientist</div>

          <div className="row-container" style={{alignItems: 'center', justifyContent:'space-evenly',  width: '75%', height:"45%"}}>
            
            <div className="col-container" style={{padding: "30px", width:'60%', height: '100%', color: "black", alignItems:'flex-start', justifyContent: 'space-evenly', backgroundColor: 'rgba(240, 240, 240, 1)'}}>
              <div className="small-headline" style={{paddingBottom: '5vh'}} >Developer, Machine learning enthusiast</div>

              <div className='infoText'>Tom was graduated from The Hong Kong University of Science and Technology with a degree in 
                computer science. He have 
                a wide range 
                of interest like blockchain, machine learning, big data.</div>

              <div className="infoText">Currently, Tom is working at Forex Forest as a data scientist, an education company which aims to teach people
              about algorithmic trading. He went through different projects.</div>

            </div>

            <div className="image-cropper" style={{ padding: '30px'}}>
              <img src={sp} alt="self"/>
            </div>
            
          </div>

      </div>
    );
  }
}
