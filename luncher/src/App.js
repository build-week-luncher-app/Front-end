import React from 'react'
import { Route } from 'react-router-dom'

import DonorHomePage from '../src/components/DonorHomePage/DonorHomePage';
import SingleSchoolPage from './components/SingleSchoolPage/SingleSchoolPage';
import './App.css';
import AddSchoolForm from './components/AddSchoolForm/AddSchoolForm';

function App() {
  return (
    <div className="App">
      <Route 
         exact path ="/" component={DonorHomePage}
      />
      <Route
        exact path="/admin" component={SingleSchoolPage}
      />
      <Route 
        exact path="/add-school-form" component={AddSchoolForm}
      />
    </div>
  );
}

export default App
