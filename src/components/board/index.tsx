import React from 'react';

import { gameSize } from '../../settings/constants';

import board from '../../assets/tileset.gif';
import Hero from '../hero';
import MiniDemon from '../miniDemon';
import Chest from '../chest';
import Demon from '../demon';
import Trap from '../trap';

const Board = () => {
   return(
      <div className="">
         <MiniDemon initialPosition={{x: 10, y: 10}} />
         <MiniDemon initialPosition={{x: 10, y: 15}} />
         <Chest />
         <Demon />
         <Trap />
         <Hero />
         <img src={ board } width={gameSize} height={gameSize} alt="Gif dungeon" />
      </div>
   );
}

export default Board;