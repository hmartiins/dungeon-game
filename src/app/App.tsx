import React from 'react';
import './App.css';

import Board from '../components/board';
import { gameSize } from '../settings/constants';

function App() {
  return (
    <div className="App">
      <div 
        style={{
          position: 'relative',
          width: gameSize,
          height: gameSize,
        }}
      > 
        <Board />
      </div>
    </div>
  );
}

export default App;
