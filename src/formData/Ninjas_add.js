import React from 'react'

const Ninjas = ({initialObject}) => {

  // const { ninjas } = this.props;
  // const ninjaList = ninjas.map(ninja => {
  //   if (ninja.age > 20){
  //     return (
  //       <div className="ninja" key={ninja.id}>
  //         <div>Name: { ninja.name }</div>
  //         <div>Age: { ninja.age }</div>
  //         <div>Belt: { ninja.belt }</div>
  //       </div>
  //     )
  //   } else {
  //     return null
  //   }
  // });

  return (
    <div className="ninja-list">
      { 
        initialObject.map(singleObject => {
          return singleObject.age > 20 ? (
            <div key={singleObject.id}>
              <div>Name: { singleObject.name }</div>
              <div>Age: { singleObject.age }</div>
              <div>Belt: { singleObject.belt }</div>
            </div>
          ) : null
        })
      }
    </div>
  );

}

export default Ninjas