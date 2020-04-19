import useInterval from '@use-it/interval';
import { useState } from 'react';
import { EDirection } from '../../settings/constants';
import { handleNextPosition } from '../../contexts/canvas/helpers';

function useEnemyMoviment(initialPosition){
   const [positionState, updatePositionState] = useState(initialPosition);
   const [direction, updateDirectionState] = useState(EDirection.RIGHT);
  
   useInterval(function move(){
      const random = Math.floor(Math.random() * 3);
      const directionArray = Object.values(EDirection);
      const randomDirection = directionArray[random];

      const nextMoviment = handleNextPosition(randomDirection, positionState);
      
      updateDirectionState(randomDirection);
      updatePositionState(nextMoviment);
   },2000);

    return{
      position: positionState,
      direction: direction,
    }
}

export default useEnemyMoviment;