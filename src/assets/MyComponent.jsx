import React, { useState } from "react";

function MyComponent(){
         
     const [name, setName] = useState("Guest") ;   
     const [age, setAge] = useState(0) ;
      const [isEmployed , setIsEmployed] = useState("false");
      
      const updateName = () => {
         setName("Spongebob");
      }
    
     const incrementAge = () => {
         setAge(age + 1);
      } 
      
      const Employement = () =>{
         setIsEmployed("true")
      } ;
  
  return(<>
             <div>
                   <p>Name: {name}</p>
                   <button onClick={updateName}></button>
                   <p>Age: {age}</p>
                   <button onClick={incrementAge}></button>
                   <button onClick={Employement}></button>                  
             </div>
         </>);

};
export default MyComponent