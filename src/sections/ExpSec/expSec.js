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
            console.log(items[i])
          }
          else {
            items[i].classList.remove("in-view");
            console.log("hehe")
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
            <div className="item">haha</div>
          </div>

          <div className="wrapper">
            <div className="item">hehe</div>
          </div>

        </div>
        <div className="tri"></div>
        
      </div>
    );
}
