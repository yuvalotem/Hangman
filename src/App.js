import React, {Component} from 'react';
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      letterStatus:{},
      solution: [{
        word: 'CALM',
        hint: 'Your ideal mode when coding'
      },
      {
        word: 'WINTER',
        hint: 'Cold time'
      },
      {
        word: 'CAR',
        hint: 'Fast and fiureus'
      },
      {
        word: 'HOUSE',
        hint: 'In the middel of our street'
      }],
      index: 0,
      score: 100
    }

    for(let i = 65; i < 91; i++){
      this.state.letterStatus[String.fromCharCode(i)] = false
    }

  }


  selectLetter = letter =>{
    const newLetterStatus = {...this.state.letterStatus}
    let newScore = this.state.score
    let counter = 0
    newLetterStatus[letter] = true
    for(let i of this.state.solution[this.state.index].word){
      if(i === letter){
        newScore = newScore + 5
        counter++
      }
    }
    if(!counter){
      newScore = newScore - 20
    }
    this.setState({
      letterStatus: newLetterStatus,
      score: newScore
    })
  }

  EndGame = () =>{
    let finished = true
    for(let i of this.state.solution[this.state.index].word){
      if(!this.state.letterStatus[i]){
        finished = false
      }
    }
    if(finished){
      return 'Congratulations'
    }
    if(this.state.score <=0){
      return 'End of the game the world was ' + this.state.solution[this.state.index].word
    }
  }

  newGame = () => {
    let newIndex
    if (this.state.index === 3) {
      newIndex = 0
    } else {
      newIndex = this.state.index + 1
    }
    const newLetterStatus = {}
    for (let i = 65; i < 91; i++) {
      newLetterStatus[String.fromCharCode(i)] = false
    }
    this.setState({
      letterStatus: newLetterStatus,
      index: newIndex,
      score: 100
    })
  }

  render = () => {
    return (
      <div className="App">
        <Score score={this.state.score} EndGame={this.EndGame} newGame={this.newGame}/>
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution[this.state.index]}/>
        <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} />
      </div>
    );
  }
}

export default App;
