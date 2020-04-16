import React from 'react';
import { tileSize } from '../../settings/constants';

import './style.css'

import hero from '../../assets/HERO.png';

const Hero = () => {
   return(
      <div 
         style={{
            position: 'absolute',
            bottom: 48 * 2,
            left: 48 * 1,
            width: tileSize,
            height: 100,
            backgroundImage: `url(${hero})`,
            backgroundRepeat: "no-repeat",
            animation: 'hero-animation 1s steps(4) infinite',
         }}
      />
   );
}

export default Hero;