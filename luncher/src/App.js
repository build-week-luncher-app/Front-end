import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import DonorHomePage from '../src/components/DonorHomePage/DonorHomePage';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schools: []
    }
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={DonorHomePage} />
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Route 
//         exact path ="/" component={DonorHomePage}
//       />
//     </div>
//   );
// }

// export default App
