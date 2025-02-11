import React, { useState } from "react";

function MyComponent(){
            
      const[name,setName] = useState("Guest");
      /* const[quantity,setQuant]  */
     function handleNameChange(event){
        setName(event.target.value);
     }
  
  return(<>
              <input value={name} onChange={handleNameChange} />
              <p>name: {name}</p>
         </>);

};
export default MyComponent