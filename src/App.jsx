import { useState } from "react"




function App() {
 let [show, SetShow] = useState(false);
 let handleClickOne = () =>{
 SetShow(!show)
  
 };
  return (
    <>
    <button className="click" onClick={handleClickOne}>click</button>
      {show == true && <div className="one"></div>}

    </>
  )
}

export default App
// let [ami, SetAmi] = useState(0);
//  let handleIncrement = ()=>{
//    SetAmi(ami +1)
//   }
  
//   let handleDecrement = ()=>{
//     if (ami > 0) {
      
//       SetAmi(ami -1)
//     }
//   }  
