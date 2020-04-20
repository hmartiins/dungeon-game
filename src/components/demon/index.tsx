import React from 'react';
import { tileSize, EDirection } from '../../settings/constants';
import useEnemyMoviment from '../../hooks/enemyMoviment';

import './style.css'

import demon from '../../assets/DEMON.png';

const Demon = () => {

   const { position, direction } = useEnemyMoviment({x: 15, y: 5});

   return(
      <div 
         style={{
            position: 'absolute',
            top:tileSize * position.y,
            left: tileSize * position.x,
            width: tileSize * 2,
            height: tileSize * 2,
            backgroundImage: `url(${demon})`,
            backgroundRepeat: "no-repeat",
            animation: 'demon-animation 1s steps(4) infinite',
            transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`
         }}
      />
   );
}

export default Demon;