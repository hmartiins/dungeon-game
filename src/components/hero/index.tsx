import React from 'react';

import { tileSize, headOffset, EDirection } from '../../settings/constants';
import useHeroMoviment from '../../hooks/heroMoviment';

import './style.css'

import hero from '../../assets/HERO.png';

const Hero = () => {

  const initialPosition = {
    x: 15,
    y: 15
  };
    
  const { direction, position } = useHeroMoviment(initialPosition);

   return(
      <div 
         style={{
            position: 'absolute',
            top:tileSize * position.y,
            left: tileSize * position.x,
            width: tileSize,
            height: tileSize + headOffset,
            backgroundImage: `url(${hero})`,
            backgroundPosition: `0px -${tileSize - headOffset}px`,
            backgroundRepeat: 'no-repeat',
            animation: 'hero-animation 1s steps(4) infinite',
            transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
            zIndex: 1
         }}
      />
   );
}

export default Hero;