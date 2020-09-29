import React from 'react';
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';
import './App.css';

function App() {
  return (
    <div className="App">
      <Score />
      <Solution />
      <Letters />
    </div>
  );
}

export default App;
