import React from 'react';
import "./infoSec.css"
import sp from '../../images/self-pic.jpg';

export default class InfoSec extends React.PureComponent {

  render() {

    return (
        <div className="info-sec">

          <div className="headline title">Tom, Data Scientist</div>

          <div className="row-container" style={{alignItems: 'center', justifyContent:'space-evenly',  width: '75%', height:"45%"}}>
            
            <div className="col-container" style={{padding: "30px", width:'60%', height: '100%', color: "black", alignItems:'flex-start', justifyContent: 'space-evenly', backgroundColor: 'rgba(250, 250, 255, 0.9)'}}>
              <div className="small-headline" style={{paddingBottom: '5vh'}} >Developer, Machine learning enthusiast</div>

              <div className='infoText'>Tom was graduated from The Hong Kong University of Science and Technology with a degree in 
                computer science. He has a wide range of interests like blockchain, AI and cloud computing. Among all of them, Tom is deeply attracted by machine learning. Back in 
                college, he concentrated on using machine learning to do image analysis. He had done a lot of computer vision related projects ranging from image segmentation to image 
                generation. His final year project was also about image. He teamed up with other two students to create a model that can generate a reflection image  given 
                a 2D chair image.</div>

              <div className="infoText">Currently, Tom moved away from image analysis to time series data analysis. He is now working as a data scientist at Forex Forest, an education 
              company which aims to teach people about algorithmic trading. His major responsibility is about performing data mining techniques on stock and foreign exchange market 
              data.</div>

            </div>

            <div className="image-cropper" style={{ padding: '30px'}}>
              <img src={sp} alt="self"/>
            </div>
            
          </div>

      </div>
    );
  }
}
