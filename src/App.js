import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Michael's First React App</h1>
        </header>
        <p className="App-intro">
        This works - ta da!
        </p>
        <p>
          Give me that high-paying developer job right now...
        </p>
        <p>
          These are changes made on my MacBook.
          Now I'm adding the VSC change to test VSC integration.
        </p>
      </div>
    );
  }
}

export default App;
