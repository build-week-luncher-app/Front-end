import React from 'react'
import { Route } from 'react-router-dom'

import DonorHomePage from '../src/components/DonorHomePage/DonorHomePage';
import SingleSchoolPage from './components/SingleSchoolPage/SingleSchoolPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route 
         exact path ="/" component={DonorHomePage}
      />
      <Route
        exact path="/admin" component={SingleSchoolPage}
      />
    </div>
  );
}

export default App
