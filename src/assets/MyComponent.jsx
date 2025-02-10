import React, { useState } from "react";

function MyComponent(){
            
      let [count,setCount] = useState(0) ;
      
      const Add = () => {
         setCount(count + 1) ;
      }
    
     const resetCount = () => {
      setCount(count = 0) ;
      } 
      
      const minus = () =>{
         setCount(count - 1)  ;
         
      } ;
  
  return(<>
             <div>
                   <p>{count}</p>
                   <button onClick={Add}>+</button>
                   <button onClick={resetCount}>reset</button>
                   <button onClick={minus}>-</button>                  
             </div>
         </>);

};
export default MyComponent