import React from 'react';
import logo from './logo.svg';

import NavMenu from './components/NavMenu/NavMenu'
import DonorHomePage from '../src/components/DonorHomePage/DonorHomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <DonorHomePage />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
