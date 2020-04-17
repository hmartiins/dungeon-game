import React from 'react';
import { tileSize, headOffset } from '../../settings/constants';

import './style.css'

import chest from '../../assets/CHEST.png';

const Chest = () => {
   return(
      <div 
         style={{
            position: 'absolute',
            bottom: tileSize * 12,
            left: tileSize * 5,
            width: tileSize,
            height: tileSize + 5,
            backgroundImage: `url(${chest})`,
            backgroundRepeat: "no-repeat",
            animation: 'chest-animation 1s steps(3) infinite',
         }}
      />
   );
}

export default Chest;