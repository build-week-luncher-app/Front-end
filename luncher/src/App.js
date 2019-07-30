import React from 'react';

import LoginForm from '../src/components/LoginForm/LoginForm';
import DonorHomePage from '../src/components/DonorHomePage/DonorHomePage';
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
