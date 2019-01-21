import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CustomersPageContainer } from './containers/CustomersPageContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomersPageContainer />
      </div>
    );
  }
}

export default App;
