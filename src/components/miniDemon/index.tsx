import React from 'react';
import { tileSize, headOffset } from '../../settings/constants';

import './style.css'

import miniDemon from '../../assets/MINI-DEMON.png';

const MiniDemon = () => {
   return(
      <div 
         style={{
            position: 'absolute',
            bottom: tileSize * 10,
            left: tileSize * 5,
            width: tileSize,
            height: tileSize + headOffset,
            backgroundImage: `url(${miniDemon})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `0 -${tileSize - headOffset}px` ,
            animation: 'miniDemon-animation 1s steps(4) infinite',
         }}
      />
   );
}

export default MiniDemon;