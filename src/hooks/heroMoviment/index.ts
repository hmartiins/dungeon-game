import useEventListener from '@use-it/event-listener';
import { useState, KeyboardEvent } from 'react';

function useHeroMoviment(initialPosition){
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

    return{
      position: positionState,
      direction: direction,
    }
}

export default useHeroMoviment;