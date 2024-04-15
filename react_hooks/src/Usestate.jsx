import { useState } from "react";

function Usestate() {
  //Hooks in react enable functional componenets to use state and life cycle features.

  //LIFECYCLE: mount,updating,unmount.

  //USESTATE: `useState()` in react that allow you to manage the state in functional components.

  //SYNTAX :import{useState} from "react"
  //const[name,setName] =useState("") -->const [variable:store the value,
   // function: to upadte the value ]

   const [ count, setCount] = useState(0); 
    //count is assigned a value but never used.

    function increaseValue(){
        setCount((prev) => prev +1);
    }

    function decreaseValue(){
        if (count === 0){
            setCount(0);

        }else{
            setCount((prev) => prev -1);
        }

    }
    function show(){
        alert(`your value is :${count}`);
    }
    function addValue(){
       const value= prompt("Please enter your value:");
       setCount(value);
    }

  return (
    <div>
        <h1>USESTATE</h1>
        <h2>COUNT :{count}</h2>
        <button onClick={increaseValue}>ADD</button>
        <button onClick={decreaseValue}>REDUCE</button>
        <button onClick={show}>SHOW</button>
        <button onClick={addValue}>ADD VALUE</button>
    
        
      
    </div>
  )
}

export default Usestate
