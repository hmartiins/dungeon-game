import useEventListener from '@use-it/event-listener';
import { useState, KeyboardEvent } from 'react';
import { EDirection } from '../../settings/constants';

function useHeroMoviment(initialPosition){
   const [positionState, updatePositionState] = useState(initialPosition);
   const [direction, updateDirectionState] = useState(EDirection.RIGHT);
  
   useEventListener('keydown', (event: KeyboardEvent<HTMLDivElement>) => {
      if ((event.key === EDirection.LEFT) && (positionState.x > 0)){
        updatePositionState({ x: positionState.x - 1, y: positionState.y });
        updateDirectionState(EDirection.LEFT);
      } else if ((event.key === EDirection.RIGHT) && (positionState.x <= 18)) {
        updatePositionState({ x: positionState.x + 1, y: positionState.y });
        updateDirectionState(EDirection.RIGHT);
      } else if ((event.key === EDirection.DOWN) && (positionState.y > 1)){
        updatePositionState({ x: positionState.x, y: positionState.y - 1 });
      } else if ((event.key === EDirection.UP) && (positionState.y <= 17)){
        updatePositionState({ x: positionState.x, y: positionState.y + 1 });
      }
    });

    return{
      position: positionState,
      direction: direction,
    }
}

export default useHeroMoviment;