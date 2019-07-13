import React from 'react';
import logo from './logo.svg';
import './App.css';




class AppMiskhat extends React.Component {
    constructor(props) {
       super(props);
         
       this.state = {
          header: "Header From Miskhat",
          content: "Content from state..."
       }
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
 export default AppMiskhat;


