import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a personal website about Tom
        </p>
        <a
          className="App-link"
          href="https://github.com/ppoyusecci"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github Page
        </a>
      </header>
    </div>
  );
}

export default App;
