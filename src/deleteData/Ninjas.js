import React from 'react'

const Ninjas = ({ninjas, deleteNinja,editNinja}) => {
  return (
    <div className="ninja-list">
      <table className="table highlight">
        <thead className="thead-dark1">
          <tr>
              <th>Name</th><th>Age</th><th>Color</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
      { 
        ninjas.map( (ninja, index) => {
          return (
            
              <tr key={ninja.id}>
                  <td>{ ninja.name }</td>
                  <td>{ ninja.age }</td>
                  <td>{ ninja.belt }</td>
                  <td>
                    <button className="waves-effect waves-light btn-small" onClick={() => {deleteNinja(ninja.id, index)}}>delete</button>
                    &nbsp;&nbsp;<button className="waves-effect waves-light btn-small" onClick={() => {editNinja(ninja.id,index)}}>edit</button>   
                  </td>
              </tr>
            
          )
        })
      }
      </tbody>
      </table>
    </div>
  );
}

export default Ninjas