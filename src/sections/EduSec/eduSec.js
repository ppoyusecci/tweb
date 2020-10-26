import React from 'react';
import "./eduSec.css"
import bg1 from '../../images/hkust.jpg'
import bg2 from '../../images/hkust-2.jpg'
import { Arrow } from '../../components/arrow/arrow';

export default class EduSec extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      bgwhich: 1
    }
  }

  componentDidMount () {
    var items = document.querySelectorAll(".uni-hide");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top <= 540 &&
        rect.bottom >= 130
      );
    }

    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("edu-in-view");
        }
      }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);




    var velocity = 0.3;
    var bg =  document.querySelector(".edu-sec"); 
    function update(){ 
        var pos = bg.getBoundingClientRect().top; 
        var height = bg.clientHeight;

        var adjust = 0 +  Math.round((pos - height) * velocity) + 'px';
        bg.style.backgroundPositionY = adjust; 
    };

    window.addEventListener('scroll', update);
  }

  render() {
    return (
        <div className="edu-sec">
          {/* <div className="headline edu-title uni-hide">My Education</div>

          <div className="edu-uni-info uni-hide" style={{padding: '50px'}}> 
          HKUST has risen through the ranks and become a global powerhouse in tertiary education as a result of our continuous pursuit of excellence in everything we do, 
          leaving its mark in life science, engineering, business education, humanities and social science, and much more. 
          </div> */}
          <div className="edu-degree-info uni-hide" style={{padding: "60px"}}>


            <div className="ui grid" style={{padding: '0'}}>

              <div className="sixteen wide column" style={{fontSize: "18px"}}>I have graduated from</div>

              <div className="twelve wide column" style={{fontFamily: 'sans-serif'}}>
                <div className='' style={{fontSize: '20px'}}><a href="https://www.ust.hk/" target="_blank" rel="noopener noreferrer" >The Hong Kong University of Science and Technology</a></div>
              </div>
              
            </div>

          </div>

        </div>
    );
  }
}
