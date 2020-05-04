import React from 'react';
import './App.css';
import flècheD from './flècheD.png';
import flècheG from './flècheG.png';
//import {useAlert} from 'react-alert';

class App extends React.Component{

  state = {
    images: [
      {id: 1, nom: flècheG},
      {id: 2, nom: flècheD},
    ],
    compteur: 0,
    random: "",
    bestScore: 0,
  };


  componentDidMount(){
    this.randomizeImage()
  }

  randomizeImage() {
    var randomInt = Math.floor(Math.random() * this.state.images.length)
    console.log("random : " + randomInt)
    this.setState({ random: randomInt})
    return randomInt;
  }

  handleReset(){
    this.setState({ compteur: this.state.compteur = 0})
    this.randomizeImage()
  }


  handleClick = (id) => {
    const index = this.state.images.findIndex(function(image){
      return image.id === id
    })

    if(index === this.state.random){
      this.setState({ compteur: this.state.compteur +1})
      this.randomizeImage();
    } else {
      this.handleReset();
    }
  }

  /*
  handlScore(){
    const score = this.state.compteur;
    const bestScore = this.state.bestScore; 
    if( score > bestScore){
        this.setState({ bestScore: this.state.score})
    } else {
        console.log("pas un assez bon score ")
        this.handleReset()
    }
  }
  */

  render(){

      return (
        <div className="App">
          <div>
            <div>
              <img src={this.randomizeImage} className="App-logo" alt="logo" />
            </div>
            {this.state.images.map(image =>(
              <button  onClick={(e) => this.handleClick(image.id)}>
                <img src={image.nom} className="App-logo" alt="logo" />
              </button> 
            ))} 
            <div>
              Score : {this.state.compteur}
            </div>
            <div>
              Meilleur Score : {this.state.bestScore}
            </div>
            <div>
              <button onClick={(e) => this.handleReset()}> Reset </button>
            </div>
          </div>
        </div>
      );
    }
  }


export default App;
