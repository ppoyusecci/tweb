import React, { useEffect } from 'react';
import "./expSec.css"

export default function ExpSec() {

  useEffect( () => {
      var items = document.querySelectorAll(".wrapper");

      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
          if (isElementInViewport(items[i])) {
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
              <span>HKUST</span>
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
