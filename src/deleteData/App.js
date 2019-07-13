import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    fullName: 'Shams Sadek',
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas,
    });
  }

  getData = () => {
    this.setState( state => ({
      ...state,
      fullName: 'Talhs Ekhlas'
    }))
  }


  deleteNinja = (id) => {
 
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    });
  }


  editNinja = (id) => {
     console.log(this.ninjas);
     return 0;
    // let ninjas = this.state.ninjas.filter(ninja => {
    //   return ninja.id !== id
    // });
    
  }

  



  render() {
    return (
      
      <div className="App">
        <h3 align="center">Todo App</h3>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} editNinja={this.editNinja} />
        <AddNinja {...this.state} addNinja={this.addNinja} getData={this.getData}/>
      </div>
    );
  }
}

export default App;