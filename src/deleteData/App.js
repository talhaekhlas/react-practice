import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    fullName: 'Shams Sadek',
    name: '',
    age: '',
    belt: '',
    id: '',
    indexOfNinja:'',
    editButton:'',
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

      // console.log( this.props )
  
      const myValue = e.target.value
      const myField = e.target.id
      
  
      // console.log(this.state)


      this.setState( state => ({
        ...state,
          [myField]: myValue
      })
      
      )

      // console.log(this.state)

      // console.log(this.state.ninjas.name);
  
    }


    handleSubmit = (e) => {
    
      e.preventDefault();

      


     
      //const afterSubmit ={};
      //const hamba =  {'name':this.state.name,'age':this.state.age,'belt':this.state.belt};

      
      // this.state.ninjas.push({ 
      //   id: Math.round(Math.random()*100), 
      //   'name':this.state.name,
      //   'age':this.state.age,
      //   'belt':this.state.belt
      // });

       const ninjas= [...this.state.ninjas,{
            id: Date.now(), 
            'name':this.state.name,
            'age':this.state.age,
            'belt':this.state.belt
          }]

      // let ninjas = this.state.ninjas;
      // console.log(this.state);

      this.setState({         
        ninjas
      })

      
      console.log(this.state);

    }


  deleteNinja = (id, index) => {
    console.log( JSON.parse( JSON.stringify(this.state.ninjas)) )
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    console.log( JSON.parse( JSON.stringify(ninjas)) )
    this.setState({
      ninjas: [...ninjas]
    });
  }





  editNinja = (id,index) => {

    const editItem = this.state.ninjas.find( item => item.id === id)


    console.log(editItem);

    this.setState( state => ({
      ...state,
      name: editItem.name,
      age: editItem.age,
      belt: editItem.belt,
      id: editItem.id,
      indexOfNinja:index,
      editButton:'enable please',
    }))

  }


  


  cancelButton = () => {

   

    this.setState( state => ({
      ...state,
      
      editButton:'',
      name: '',
      age: '',
      belt: '',
      id: '',
    }))

  }


  editSubmit = (e) => {
    e.preventDefault();

    const data = this.state.ninjas

    const findIndex = data.findIndex( item => item.id == this.state.id)

    const result = [
      ...data.slice(0,findIndex),
      {
        name: this.state.name,
        id: this.state.id,
        age: this.state.age,
        belt: this.state.belt
      },
      ...data.slice(findIndex+1)
    ]

    console.log('result', result)

    this.setState( state => ({
      ...state,
      ninjas: result
    }))

    // const editItem = this.state.ninjas.find( item => item.id == this.state.id)

    // this.state.ninjas[this.state.index].name= this.state.ninjas.name;
    // this.state.ninjas[this.state.index].age= this.state.ninjas.age;
    // this.state.ninjas[this.state.index].belt= this.state.ninjas.belt;

    

    //  const ninjasUpdate = [...this.state.ninjas];

     

    


    this.setState( state => ({
      ...state,
      // ninjas:ninjasUpdate,
      
      editButton:'',
      name: '',
      age: '',
      belt: '',
      id: '',
    }))

    


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
          cancelButton={this.cancelButton}
          editSubmit={this.editSubmit}
          
          />
      </div>
    );
  }
}

export default App;