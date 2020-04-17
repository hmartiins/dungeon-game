import React from 'react';
import { tileSize, headOffset } from '../../settings/constants';

import './style.css'

import hero from '../../assets/HERO.png';

const Hero = () => {
   return(
      <div 
         style={{
            position: 'absolute',
            bottom: tileSize * 2,
            left: tileSize * 1,
            width: tileSize,
            height: tileSize + headOffset,
            backgroundImage: `url(${hero})`,
            backgroundPosition: `0 -${tileSize - headOffset}px`,
            backgroundRepeat: "no-repeat",
            animation: 'hero-animation 1s steps(4) infinite',
         }}
      />
   );
}

export default Hero;