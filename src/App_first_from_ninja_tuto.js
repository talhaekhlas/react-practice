import React, { Component } from 'react';
import Ninjas from './Ninjas_first'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas />
      </div>
    );
  }
}

export default App;