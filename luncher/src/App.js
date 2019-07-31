import React from 'react'
import { Route } from 'react-router-dom'

import DonorHomePage from '../src/components/DonorHomePage/DonorHomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route 
        exact path ="/" component={DonorHomePage}
      />
    </div>
  );
}

export default App
