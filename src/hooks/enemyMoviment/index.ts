import useInterval from '@use-it/interval';
import { useState } from 'react';
import { EDirection } from '../../settings/constants';

function useEnemyMoviment(initialPosition){
   const [positionState, updatePositionState] = useState(initialPosition);
   const [direction, updateDirectionState] = useState(EDirection.RIGHT);
  
   useInterval(function move(){
      const random = Math.floor(Math.random() * 3);
      const directionArray = Object.values(EDirection);
      const randomDirection = directionArray[random];

      if ((randomDirection === EDirection.LEFT) && (positionState.x > 0)){
         updatePositionState({ x: positionState.x - 1, y: positionState.y });
         updateDirectionState(EDirection.LEFT);
      } else if ((randomDirection === EDirection.RIGHT) && (positionState.x <= 18)) {
         updatePositionState({ x: positionState.x + 1, y: positionState.y });
         updateDirectionState(EDirection.RIGHT);
      } else if ((randomDirection === EDirection.DOWN) && (positionState.y > 1)){
         updatePositionState({ x: positionState.x, y: positionState.y - 1 });
      } else if ((randomDirection === EDirection.UP) && (positionState.y <= 17)){
         updatePositionState({ x: positionState.x, y: positionState.y + 1 });
      }
    },2000);

    return{
      position: positionState,
      direction: direction,
    }
}

export default useEnemyMoviment;