import React from 'react';
import { tileSize } from '../../settings/constants';

import './style.css'

import trap from '../../assets/TRAP.png';

const Trap = () => {
   return(
      <div 
         style={{
            position: 'absolute',
            top: tileSize * 12 + 20,
            left: tileSize * 2,
            width: tileSize,
            height: tileSize,
            backgroundImage: `url(${trap})`,
            backgroundRepeat: "no-repeat",
            animation: 'trap-animation 1s steps(8) infinite',
         }}
      />
   );
}

export default Trap;