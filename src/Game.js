import React from 'react';
import flècheD from './flècheD.png';
import flècheG from './flècheG.png';

class Game extends React.Component{
  //Essaie de sav
  state = {
    images: [
      {id: 1, nom: flècheG},
      {id: 2, nom: flècheD},
    ],
    compteur: 0,
    random: 0,
    bestScore: 0,
  };


  componentDidMount(){
    this.randomizeImage()
  }

  randomizeImage() {
    var randomInt = Math.floor(Math.random() * this.state.images.length)
    this.setState({ random: randomInt})
    return randomInt;
  }


  handleClick = (id) => {
    const index = this.state.images.findIndex(function(image){
      return image.id === id
    })

    if(index === this.state.random){
      this.setState({ compteur: this.state.compteur +1})
      this.randomizeImage();
    } else {
      alert("Vous avez perdue")
      this.handlScore();
    }
  }

  
  handlScore(){
    const bestScore = this.state.bestScore; 
    if( this.state.compteur > bestScore){
        this.setState({ bestScore: this.state.compteur})
        this.handleReset()
    } else {
        this.handleReset()
    }
  }

  handleReset(){
    this.setState({ compteur: this.state.compteur = 0})
    this.randomizeImage()
  }
  

  render(){
      return (
          <div className="container">
            <div>
              <img src={this.state.images[this.state.random].nom} className="App-logo" alt="logo" />
            </div>
            {this.state.images.map(image =>(
              <button  onClick={(e) => this.handleClick(image.id)}>
                <img src={image.nom} className="App-logo" alt="logo" />
              </button> 
            ))} 
            <div className="jumbotron">
              Score : {this.state.compteur}
            </div>
            <div className="jumbotron">
              Meilleur Score : {this.state.bestScore}
            </div>
            <div>
              <button className="btn btn-primary" onClick={(e) => this.handleReset()}> Reset </button>
            </div>
          </div>
      );
    }
  }


export default Game;
