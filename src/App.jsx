import { useState } from "react"


function App() {
  let [ami, SetAmi] = useState(0);
 let handleIncrement = ()=>{
   SetAmi(ami +1)
  }
  
  let handleDecrement = ()=>{
    if (ami > 0) {
      
      SetAmi(ami -1)
    }
  }  

  return (
    <>
    <button onClick={handleDecrement}>-</button>
    <h1>{ami}</h1>
    <button onClick={handleIncrement}>+</button>
    </>
  )
}

export default App
