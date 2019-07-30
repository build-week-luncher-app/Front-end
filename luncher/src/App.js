import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavMenu from '../src/components/NavMenu/NavMenu'
import LoginForm from '../src/components/LoginForm/LoginForm';
import DonorHomePage from '../src/components/DonorHomePage/DonorHomePage';
import './App.css';
import Register from './components/Register/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <NavMenu />
        <DonorHomePage />
        <LoginForm />
        <Register />


      </div>
    </Router>
  );
}

export default App;

