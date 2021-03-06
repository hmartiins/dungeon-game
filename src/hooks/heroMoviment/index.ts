import useEventListener from '@use-it/event-listener';
import { useState, KeyboardEvent } from 'react';
import { EDirection } from '../../settings/constants';
import { handleNextPosition } from '../../contexts/canvas/helpers';

function useHeroMoviment(initialPosition){
   const [positionState, updatePositionState] = useState(initialPosition);
   const [direction, updateDirectionState] = useState(EDirection.RIGHT);
  
   useEventListener('keydown', (event: KeyboardEvent<HTMLDivElement>) => {
      const direction = event.key as EDirection; 

      if(direction.indexOf('Arrow') === -1){
        return;
      }
      const nextPosition = handleNextPosition(direction, positionState);
    
      updatePositionState(nextPosition);
      updateDirectionState(direction);
    });

    return{
      position: positionState,
      direction: direction,
    }
}

export default useHeroMoviment;