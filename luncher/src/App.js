import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import DonorHomePage from '../src/components/DonorHomePage/DonorHomePage';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import SchoolHomePage from './components/SchoolHomePage/SchoolHomePage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route 
            exact path ="/" component={DonorHomePage}
          />
          <Route 
            exact path ="/login" component={LoginForm}
          />
          <PrivateRoute 
            exact path ="/admin" component={SchoolHomePage}
          />
        </div>
      </BrowserRouter> 
    );
  }
}

export default App
