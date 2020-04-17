import React from 'react';
import { tileSize } from '../../settings/constants';

import './style.css'

import demon from '../../assets/DEMON.png';

const Demon = () => {
   return(
      <div 
         style={{
            position: 'absolute',
            bottom: tileSize * 5,
            left: tileSize * 5,
            width: tileSize * 2,
            height: tileSize * 2,
            backgroundImage: `url(${demon})`,
            backgroundRepeat: "no-repeat",
            animation: 'demon-animation 1s steps(4) infinite',
         }}
      />
   );
}

export default Demon;