import React from 'react';
import "./navbar.css"
import { Button } from 'semantic-ui-react';

export default class Navbar extends React.PureComponent {

  render() {

    return (
        <div className="navbar">
        <div style={{width: '25%', display: 'flex', justifyContent: 'center'}}>
          T
        </div>
        <div style={{width: '55%', display: 'flex', justifyContent: 'flex-end'}}>
              <a
              className="text"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              style={{padding: '1vw'}}
              >
              Info
              </a>

              <a
              className="text"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              style={{padding: '1vw'}}
              >
              edu
              </a>

              <a
              className="text"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              style={{padding: '1vw'}}
              >
              projects
              </a>
              
              <a
              className="text"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              style={{padding: '1vw'}}
              >
              contact
              </a>
        </div>
        <div style={{width: '20%', display: 'flex', justifyContent: 'center'}}>
          <Button primary color='teal' size='small'>LogIn</Button>
        </div>
      </div>
    );
  }
}

