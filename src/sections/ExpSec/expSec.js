import React, { useEffect } from 'react';
import "./expSec.css"

export default function ExpSec() {

  useEffect( () => {
    var items = document.querySelectorAll(".wrapper");
    var max_width = 0;


    for (var i = 0; i < items.length; i++) {
      var width = items[i].clientWidth;
      max_width = width>max_width? width : max_width;
    }

    for (var i = 0; i < items.length; i++) {
      items[i].style.width = max_width + 'px';
    }

  }, []
)

  useEffect( () => {
      var items = document.querySelectorAll(".wrapper");
      var bg = document.querySelector(".exp-sec");

      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top <= 0 &&
          rect.bottom >=0
        );
      }

      function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
          if (isElementInViewport(bg)) {
            items[i].classList.add("in-view");
          }
          else {
            items[i].classList.remove("in-view");
          }
        }
      }

      // listen for events
      window.addEventListener("load", callbackFunc);
      window.addEventListener("resize", callbackFunc);
      window.addEventListener("scroll", callbackFunc);
    }
  )
   
    return (
      <div className="col-container exp-sec section">

        <div className="headline">My History</div>  

        <div className="timeline">

          <div className="wrapper">
            <div className="item">
              <time>1998</time>
              <span>Born</span>
            </div>
          </div>

          <div className="wrapper">
            <div className="item">
              <time>2016 - 2020 </time>
              <span>Studied at HKUST</span>
              <span>BEng in Computer Science</span>
            </div>
          </div>

          <div className="wrapper">
            <div className="item">
              <time>2020 - present </time>
              <span>Forex Forest</span>
              <span>Data Scientist</span>
            </div>
          </div>

        </div>
        <div className="tri"></div>
        
      </div>
    );
}
