import React, { useEffect } from 'react';
import "./infoSec.css"
import sp from '../../images/self-pic.jpg';

export default function InfoSec() {

    useEffect( () => {
      var velocity = 1;
      var bg =  document.querySelector(".info-sec"); 
      function update(){ 
          var pos = bg.getBoundingClientRect().top; 
          var height = bg.clientHeight;
          var new_heigh = '100vw ' + 3*height + 'px';
          bg.style.backgroundSize = new_heigh;

          var adjust = 0 +  Math.round((pos - height) * velocity) + 'px';
          bg.style.backgroundPositionY = adjust; 
      };

      window.addEventListener('scroll', update);
    })

    return (
        <div className="info-sec section">

          <div className="headline">Tom, Data Scientist</div>

          <div className="row-container" style={{alignItems: 'center', justifyContent:'space-evenly',  width: '100%', height:"100%"}}>
            
            <div className="col-container">
              <div className="small-headline">Developer, Machine learning enthusiast</div>

              <div className='text'>
                I was graduated from The Hong Kong University of Science and Technology with a degree in 
                computer science. With a deep interest in machine learning and computer vision, I mostly spent
                my time on projects like image segmentation and image generation back in college.

                <div className="passage-break"></div>

                Since my graduation, I moved from image analysis to time series data analysis. I am now working 
                as a data scientist at Forex Forest, an education 
                company which develops its own automated trading algorithm and provides related courses. 
                My major responsibility here  is to perform data mining and quantitative analysis on 
                foreign exchange rates data to improve the performance of our products.
              </div>

            </div>

            <div className="image-cropper" style={{ padding: '30px'}}>
              <img src={sp} alt="self"/>
            </div>
            
          </div>

      </div>
    );
  }
