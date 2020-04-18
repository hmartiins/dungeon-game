import React, { useState, KeyboardEvent } from 'react';
import useEventListener from '@use-it/event-listener';

import { tileSize, headOffset } from '../../settings/constants';

import './style.css'

import hero from '../../assets/HERO.png';


const Hero = () => {
   const initialPosition = {
      x: 15,
      y: 15
    };

   const [positionState, updatePositionState] = useState(initialPosition);
   const [direction, updateDirectionState] = useState('RIGHT');

   useEventListener('keydown', (event: KeyboardEvent<HTMLDivElement>) => {
      if ((event.key === 'ArrowLeft') && (positionState.x > 0)){
        updatePositionState({ x: positionState.x - 1, y: positionState.y });
        updateDirectionState('LEFT');
      } else if ((event.key === 'ArrowRight') && (positionState.x <= 18)) {
        updatePositionState({ x: positionState.x + 1, y: positionState.y });
        updateDirectionState('RIGHT');
      } else if ((event.key === 'ArrowDown') && (positionState.y > 1)){
        updatePositionState({ x: positionState.x, y: positionState.y - 1 });
      } else if ((event.key === 'ArrowUp') && (positionState.y <= 17)){
        updatePositionState({ x: positionState.x, y: positionState.y + 1 });
      }
    });
    
   return(
      <div 
         style={{
            position: 'absolute',
            bottom: tileSize * positionState.y,
            left: tileSize * positionState.x,
            width: tileSize,
            height: tileSize + headOffset,
            backgroundImage: `url(${hero})`,
            backgroundPosition: `0 -${tileSize - headOffset}px`,
            backgroundRepeat: "no-repeat",
            animation: 'hero-animation 1s steps(4) infinite',
            transform: `scaleX(${direction === 'RIGHT' ? 1 : -1})`
         }}
      />
   );
}

export default Hero;