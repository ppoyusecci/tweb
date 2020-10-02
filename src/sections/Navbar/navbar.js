import React from 'react';
import "./navbar.css"
import t1 from '../../images/t1.png';
import t2 from '../../images/t2.png';



export default class Navbar extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {clicked: false};
  }

  render() {

    return (
        <div className={`navbar ${this.state.clicked? "showColor" : ""}`}>
            
          <div style={{width: "25%", paddingLeft: '50px', paddingTop: '10px'}}>
            <button type="submit" style={{backgroundColor: "rgba(255, 255, 255, 0", border: 'none'}} onClick={() => this.state.clicked? this.setState({clicked: false}) : this.setState({clicked: true})}>
              {this.state.clicked? <img src={t2} className="tIcon" alt="" width="30px" height="30px" style={{paddingLeft: "0px"}}/>
                                    :
                                    <img src={t1} className="tIcon" alt="" width="30px" height="30px" style={{paddingLeft: "0px"}}/>}
            </button>
          </div>

        {
          this.state.clicked? <div style={{width: '100%', display: 'flex', alignItems:'center', justifyContent: 'flex-end', paddingRight: '50px'}}>
                                    <div style={{}}>
                                      <a
                                      className="text navbar-text"
                                      href="#infoSec"
                                      rel="noopener noreferrer"
                                      style={{padding: '1vw'}}
                                      >
                                      About me
                                      </a>

                                      <a
                                      className="text navbar-text"
                                      href="#expSec"
                                      rel="noopener noreferrer"
                                      style={{padding: '1vw'}}
                                      >
                                      Experience
                                      </a>

                                      <a
                                      className="text navbar-text"
                                      href="#eduSec"
                                      rel="noopener noreferrer"
                                      style={{padding: '1vw'}}
                                      >
                                      Education
                                      </a>

                                      <a
                                      className="text navbar-text"
                                      href="#projSec"
                                      rel="noopener noreferrer"
                                      style={{padding: '1vw'}}
                                      >
                                      Projects
                                      </a>
                                      
                                      <a
                                      className="text navbar-text"
                                      href="#contactSec"
                                      rel="noopener noreferrer"
                                      style={{padding: '1vw'}}
                                      >
                                      Contact
                                      </a>
                                    </div>



                              </div>
          
          : <div />
        }

      </div>
    );
  }
}

