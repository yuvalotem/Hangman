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
      solution: {
        word: 'BYTES',
        hint: 'Your ideal mode when coding'
      },
      score: 100
    }
  }

  generateLetterStatuses (){
    for(let i = 65; i < 91; i++){
      this.state.letterStatus[String.fromCharCode(i)] = false
    }
  }

  render() {
    this.generateLetterStatuses()
    return (
      <div className="App">
        <Score score={this.state.score} />
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution}/>
        <Letters letterStatus={this.state.letterStatus} />
      </div>
    );
  }
}

export default App;
