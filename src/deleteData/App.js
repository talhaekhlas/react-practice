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


  handleChange = (e) => {

      console.log( this.props )
  
      const myValue = e.target.value
      const myField = e.target.id
  
  
      this.setState( state => ({
        ...state,
          [myField]: myValue
      }))
  
    }


    handleSubmit = (e) => {
    
      e.preventDefault();
      
      console.log(this.state);

      return 0;
      if(this.state.name.trim().length !==0 && 
      this.state.age.trim().length !==0 && 
      this.state.belt.trim().length !==0 ){
  
      this.props.addNinja(this.state);
  
        this.setState({
          name: '',
          age: '',
          belt: '',
          nameError: '',
          ageError: '',
          beltError: ''
          
        })
  
      }
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
        <AddNinja 
        {...this.state} 
        addNinja={this.addNinja}
         handleChange={this.handleChange}
          getData={this.getData}
          handleSubmit={this.handleSubmit}
          
          />
      </div>
    );
  }
}

export default App;