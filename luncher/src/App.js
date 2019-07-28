import React from 'react';
import logo from './logo.svg';

import DonorHomePage from '../src/components/DonorHomePage/DonorHomePage';
import LoginForm from '../src/components/LoginForm/LoginForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <DonorHomePage />
      <LoginForm />
    </div>
  );
}

export default App;
