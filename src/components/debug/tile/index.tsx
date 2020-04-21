import React from 'react';
import { tileSize } from '../../../settings/constants';

interface IProps{
   position: {x: number, y: number};
   text: number;
}

function Tile(props: IProps){
   function getTileColor(){
      switch(props.text){
         case 0:
            return 'yellow';
         case 1:
            return 'red';
      }
   }

   const color = getTileColor();
   return(
      <div style={{
         position: 'absolute',
         left: tileSize * props.position.x,
         top:tileSize * props.position.y + 20,
         width: tileSize, 
         height: tileSize, 
         color: color,
         border: `2px solid ${color}`,
      }}>
         {props.text}
      </div>
   );
}
export default Tile;