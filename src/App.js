import React from 'react';
import './App.css';
import Game from './Game.js';

class App extends React.Component{
  
  render(){
      return (
        <div className="container">
          <Game />
        </div>
      );
    }
  }


export default App;
