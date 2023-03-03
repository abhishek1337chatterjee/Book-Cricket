import React, { useEffect, useRef, useState } from 'react'



export const Counter = () => {
    const [countdown, setCountdown] = useState<Number>(60);
   
    const id = useRef<Number>();
    

    const handleTimer = () =>{
        
    }

    
    
    


  return (
    <div>
        <h2><>{countdown}</></h2>
        <button onClick={handleTimer} style={{border: "2px soli"}}>Click to start</button>
    </div>
  )
}
