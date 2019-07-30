import React from 'react';

import NavMenu from './components/NavMenu/NavMenu'
import DonorHomePage from '../src/components/DonorHomePage/DonorHomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <DonorHomePage />
    </div>
  );
}

export default App;
