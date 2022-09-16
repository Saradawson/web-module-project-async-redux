import React from 'react';
import Joke from './components/Joke';
import './App.css';

function App() {
  return (
  <>
    <div className="App">
      Async Redux Project
    </div>
    <div className='Joke'>
      <Joke />
    </div>
  </>
  );
}

export default App;