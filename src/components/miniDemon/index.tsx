import React from 'react';
import { tileSize, headOffset, EDirection } from '../../settings/constants';
import useEnemyMoviment from '../../hooks/enemyMoviment';

import './style.css'

import miniDemon from '../../assets/MINI-DEMON.png';

const MiniDemon = () => {

   const { position, direction } = useEnemyMoviment({x: 10, y: 5});



   return(
      <div 
         style={{
            position: 'absolute',
            bottom: tileSize * position.y,
            left: tileSize * position.x,
            width: tileSize,
            height: tileSize + headOffset,
            backgroundImage: `url(${miniDemon})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `0 -${tileSize - headOffset}px` ,
            animation: 'miniDemon-animation 1s steps(4) infinite',
            transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`
         }}
      />
   );
}

export default MiniDemon;