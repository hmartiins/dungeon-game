import React from 'react';
import './App.css';

import Board from '../components/board';
import Debugger from '../components/debug';
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
        <Debugger />
        <Board />
      </div>
    </div>
  );
}

export default App;
