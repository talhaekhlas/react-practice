import React from 'react';
import logo from './logo.svg';
import './App.css';


class AppTalha extends React.Component {
   
    state = {
        header: "Header from Talha",
        content: "Content from state..."
    }
  
   render() {
      return (
         <div>
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
         </div>
      );
   }
}
export default AppTalha;


