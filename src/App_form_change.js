import React from 'react';

class App extends React.Component {
    state = {
      name: 'Ryu',
      age: 30
    }
    handleChange = (e) => {
      this.setState({
        name: e.target.value
      })
    }
    handleSubmit = (e) => {
      e.preventDefault();
      console.log('form submitted', this.state);
    }
    render(){
      return(
        <div className="app-content">
          <h1>My name is {this.state.name}</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} />
            <button>Submit</button>
          </form>
        </div>
      )
    }
  }

  export default App;
