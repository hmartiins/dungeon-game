import React from 'react';

import { gameSize } from '../../settings/constants';

import board from '../../assets/tileset.gif';
import Hero from '../hero'
import MiniDemon from '../miniDemon'
import Demon from '../demon'

const Board = () => {
   return(
      <div className="">
         <MiniDemon />
         <Demon />
         <Hero />
         <img src={ board } width={gameSize} height={gameSize} alt="Gif dungeon" />
      </div>
   );
}

export default Board;