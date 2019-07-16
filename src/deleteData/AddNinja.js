// import React, { Component } from 'react'
import React from 'react'


// function MyHello() {
//   return (
//     <div>Hello World 2 </div>
//   )
// }

//const MyWorld = props => <div>I Love {props.name}</div>

export const AddNinja = (props) => {



  
  
    return (
      <div>

        <div>{ props.fullName}
        </div>
        {/* <MyWorld name='Sadik'/> */}

        <input type="button" value="Click here to change name" onClick={ () => props.getData() }/>


        <div className="row">
            <div className="col-md-12">
            
            <form>

            <div className="form-group">
                <label htmlFor="name">Index:</label>
                

                {props.name?<input
                  type="text"
                  className="form-control" 
                  id="id"
                  onChange={props.handleChange}
                  value={props.indexOfNinja}
                 
                />:null}
                
              </div>


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
                  onClick={() => {props.cancelButton()}}>
                  Cancel
                  </button>
                  
                  &nbsp;&nbsp;<button 
                  className="waves-effect waves-light btn-small"
                  onClick={ e => props.editSubmit(e)}>
                    Update
                  </button>
                  </div>
                :
                <button
                  className="waves-effect waves-light btn-small"
                  type="submit"
                  onClick={ e =>props.handleSubmit(e)}
                >
                    Submit
                </button>
              }
              
              
           </form>
            </div>
        </div>


       
      </div>
    )
  
}

export default AddNinja