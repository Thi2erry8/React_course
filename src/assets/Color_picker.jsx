import React, { useState } from "react";

function ColorPicker(){
            
   const [car,setcar] = useState({year: 2024,
                                  make:"Ford",
                                  model:"Mustang"});

   function handleYearChange(event){

      setcar(c => ({...c, year: event.target.value}));
   } 
   
   function handleMakeChange(event){

      setcar(c => ({...c, make: event.target.value}));
   }

   function handleModelChange(event){

      setcar(c => ({...c, model: event.target.value}));
   }

return(<>
          <div>
                <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

                 <input type="number" value={car.year} onChange={handleYearChange}/> 
                 <input type="text" value={car.make} onChange={handleMakeChange}/>
                 <input type="text" value={car.model} onChange={handleModelChange}/>
          </div>
      </>);

};
export default ColorPicker