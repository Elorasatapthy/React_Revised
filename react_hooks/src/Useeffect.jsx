import React, { useEffect } from 'react'

function Useeffect() {
//USEEFFECT:`useEffect()` is a react hook to perform side deffect in functional component.

//SYNTAX:useEffect(()=>{})
const[count, setCount] =useState(0);

  useEffect(() => { 
    setTimeout(() => {
    setCount((prev) => prev + 1 );
  }, 1000);
},[]);//[]:Empty array dependency :it renders only once.
    

 return (
    <div>
        <h1>USEFFECT:</h1>
        <h2>COUNTER VALUE:{count}</h2>
      
    </div>
  );
}

export default Useeffect
