// import React, { Component } from 'react'
import React from 'react'


// function MyHello() {
//   return (
//     <div>Hello World 2 </div>
//   )
// }

//const MyWorld = props => <div>I Love {props.name}</div>

export const AddNinja = (props) => {



  // state = {
  //   name: '',
  //   age: '',
  //   belt: '',
  //   nameError: '',
  //   ageError: '',
  //   beltError: ''
  // }


  // handleChange = (e) => {

  //   console.log( this.props )

  //   const myValue = e.target.value
  //   const myField = e.target.id


  //   this.setState( state => ({
  //     ...state,
  //       [myField]: myValue
  //   }))

  // }


  // handleSubmit = (e) => {
    
  //   e.preventDefault();
    
    
  //   if(this.state.name.trim().length !==0 && 
  //   this.state.age.trim().length !==0 && 
  //   this.state.belt.trim().length !==0 ){

  //   this.props.addNinja(this.state);

  //     this.setState({
  //       name: '',
  //       age: '',
  //       belt: '',
  //       nameError: '',
  //       ageError: '',
  //       beltError: ''
        
  //     })

  //   }
  // }


  // handleChange = (e) => {

  //   console.log( this.props )
  //   // console.log(e.target.id);
  //   // this.setState({
  //   //   [e.target.id]: e.target.value,
  //   // });

  //   // this.setState( (state, props) => ({
  //   //   ...state,
  //   //   name: e.target.value
  //   // }))

  //   const myValue = e.target.value
  //   const myField = e.target.id


  //   this.setState( state => ({
  //     ...state,
  //       [myField]: myValue
  //   }))

  // }
  // handleSubmit = (e) => {
    
  //   e.preventDefault();
    
    
  //   if(this.state.name.trim().length !==0 && 
  //   this.state.age.trim().length !==0 && 
  //   this.state.belt.trim().length !==0 ){

  //   this.props.addNinja(this.state);

  //     this.setState({
  //       name: '',
  //       age: '',
  //       belt: '',
  //       nameError: '',
  //       ageError: '',
  //       beltError: ''
        
  //     });


  //   }else{
  //       if(this.state.name.trim().length === 0){
  //         this.setState({
  //           nameError: 'Please Enter Name',
  //         });
  //       }else{
  //         this.setState({
  //           nameError: '',
  //         });
  //       }

  //       if(this.state.age.trim().length === 0){
  //         this.setState({
  //           ageError: 'Please Enter Age',
  //         });
  //       }else{
  //         this.setState({
  //           ageError: '',
  //         });
  //       }



  //       if(this.state.belt.trim().length === 0){
  //         this.setState({
  //           beltError: 'Please Enter Belt Color',
  //         });
  //       }else{
  //         this.setState({
  //           beltError: '',
  //         });
  //       }
  //   }
    
    
    
  // }
  
    return (
      <div>

        <div>{ props.fullName}
        </div>
        {/* <MyWorld name='Sadik'/> */}

        <input type="button" value="Click here to change name" onClick={ () => props.getData() }/>


        <div className="row">
            <div className="col-md-12">
            <form onSubmit={props.editButton?props.editSubmit:props.handleSubmit}>


              <div className="form-group">
                <label htmlFor="name">Name:</label>
                {/* <input type="text" className="form-control" value={this.state.name} id="name" onChange={this.handleChange} />
                <span className="error-message">{this.state.nameError}</span> */}

                <input
                  type="text"
                  className="form-control" 
                  id="name"
                  onChange={props.handleChange}
                  value={props.name}
                />
                
              </div>
              <div className="form-group">
                <label htmlFor="age">Age:</label>
                {/* <input type="text" className="form-control" value={this.state.age} id="age" onChange={this.handleChange} />
                <span className="error-message">{this.state.ageError}</span> */}

                <input 
                type="text" 
                className="form-control" 
                 id="age" 
                 onChange={props.handleChange}
                 value={props.age}
                  />
                
              </div>
              <div className="form-group">
                <label htmlFor="belt">Belt:</label>
                {/* <input type="text" className="form-control" value={this.state.belt} id="belt" onChange={this.handleChange} />
                <span className="error-message">{this.state.beltError}</span> */}

                <input 
                type="text"
                 className="form-control" 
                 id="belt" 
                 onChange={props.handleChange}
                 value={props.belt}
                  />
                
              </div>

              {
                props.editButton?
                <div>
                  <button 
                  className="waves-effect waves-light btn-small"
                  onClick={() => {props.editSubmit()}}>
                    Update
                  </button>
                  &nbsp;&nbsp;<button 
                  className="waves-effect waves-light btn-small" 
                  onClick={() => {props.cancelButton()}}>
                  Cancel
                  </button>
                  </div>
                :
                <button className="waves-effect waves-light btn-small" type="submit">Submit</button>
              }
              
              
           </form>
            </div>
        </div>


        {/* <div className="row">
            <div className="col-md-12">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" value={this.state.name} id="name" onChange={this.handleChange} />
                <span className="error-message">{this.state.nameError}</span>
              </div>
              <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input type="text" className="form-control" value={this.state.age} id="age" onChange={this.handleChange} />
                <span className="error-message">{this.state.ageError}</span>
              </div>
              <div className="form-group">
                <label htmlFor="belt">Belt:</label>
                <input type="text" className="form-control" value={this.state.belt} id="belt" onChange={this.handleChange} />
                <span className="error-message">{this.state.beltError}</span>
              </div>
              <button className="waves-effect waves-light btn-small" type="submit">Submit</button>

              
           </form>
            </div>
        </div> */}
        
      </div>
    )
  
}

export default AddNinja