import React from 'react';
import "./expSec.css"

export default class ExpSec extends React.PureComponent {

  componentDidMount () {
    var items = document.querySelectorAll(".timeline li");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
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
   
  render() {

    return (
      <div className="col-container exp-sec">

      <div className="headline">My Employmeny History</div>  

        <section className="timeline in-view">
          <ul>
            <li>
              <div>
                <time>07/2019 - 08/2019</time>
                <span><a href="https://www.atal.com/" target="_blank" rel="noopener noreferrer">Atal Engineering Ltd, </a></span>
                <span>Web developer trainee</span>
              </div>
            </li>
            <li>
              <div>
                <time>09/2020 - present</time>
                <span><a href="https://forexforest.net/en/home-english/" target="_blank" rel="noopener noreferrer">Forex Forest,</a></span>
                <span>Data Scientist</span>
              </div>
            </li>
          </ul>
        </section>
        
      </div>
      //   <div className="exp-sec">
      //   <div className="headline">Experience</div>

      //   <div class="ui grid" style={{width: '80vw', color: 'rgb(13, 182, 204)'}}>

      //     <div class="eight wide column" style={{textAlign: 'center', fontSize:'50px', color: 'rgb(10, 160, 200)'}}>Employment</div>
      //     <div class="eight wide column" style={{textAlign: 'center', fontSize:'50px', color: 'rgb(10, 160, 200)'}}>Volunteer</div>

      //     <div class="sixteen wide column"></div>
      //     <div class="sixteen wide column"></div>

      //     <div class="two wide column exp-date">09/2020 - present </div>
      //     <div class="six wide column exp-title">Data Scientist, 
      //                                                             <a 
      //                                                             href="https://www.forexforest.net" 
      //                                                             target="_blank" 
      //                                                             rel="noopener noreferrer"
      //                                                             style={{paddingLeft: '10px'}}>
      //                                                               Forex Forest
      //                                                               </a>
      //     </div>                                                        
      //     <div class="two wide column exp-date">08/2020 - present</div>
      //     <div class="six wide column exp-title">AI engineer, 
      //                                                             <a 
      //                                                             href="https://www.earth.org" 
      //                                                             target="_blank" 
      //                                                             rel="noopener noreferrer"
      //                                                             style={{paddingLeft: '10px'}}>
      //                                                               Earth.org
      //                                                               </a>
      //     </div>

      //     <div class="two wide column exp-date">07/2019 - 08/2019 </div>
      //     <div class="six wide column exp-title">Web developer trainee, 
      //                                                             <a 
      //                                                             href="https://www.atal.com" 
      //                                                             target="_blank" 
      //                                                             rel="noopener noreferrer"
      //                                                             style={{paddingLeft: '10px'}}>
      //                                                               Atal
      //                                                               </a>
      //       </div>
      //     <div class="four wide column"></div>
      //     <div class="four wide column"></div>                                   

      //   </div>

      // </div>
    );
  }
}
