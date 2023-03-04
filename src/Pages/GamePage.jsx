import React, { useState } from 'react'
import { Counter } from '../Components/Counter'

 


export const GamePage = () => {

  const [players, setPlayers] = useState({});
  const [array, setArray] = useState([])
   
  
    const hit = () => {
      for(let i=0; i<10;i++){
        let arr = [];
        while(arr.length < 6){
          let x = Math.floor(Math.random() * Number(7));
          if(x==5){
            x = 2;
          }else if(x==0){
            arr.push(x);
            break;
          }
          arr.push(x);
        }
          let obj = {
            i: arr,
          }

          // setPlayers(obj);
          setArray([...array, obj])
          
      }
    }

    console.log(array);
  return (
    <div>
        <button onClick={hit} style={{border: "2px solid red"}}>Click to start</button>
    </div>
  )
}
