import React from 'react';
import "./contactSec.css"

export default class ContactSec extends React.PureComponent {

  render() {

    return (
        <div className="contact-sec">
          <a
            className="contact-link"
            href="https://github.com/ppoyusecci"
            target="_blank"
            rel="noopener noreferrer"
            style={{padding: '50px'}}
          >
            My Github Page
          </a>
          
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/tom-cheng-826a7b1b1/"
            target="_blank"
            rel="noopener noreferrer"
            style={{padding: '50px'}}
          >
            My Linkedin Profile Page
          </a>

          <a
            className="contact-link"
            href = "mailto: tomatwf@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{padding: '50px'}}
          >
            Send Email to me at tomatwf@gmail.com
          </a>

      </div>
    );
  }
}
