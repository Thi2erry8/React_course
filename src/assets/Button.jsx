import Proptypes from 'prop-types'

function button(props){
         
  const handleClick = (name) => {
    console.log(name);
    
  } ;
  
  return(<>
             <button onClick={() => handleClick("Bro Code")}>Click me😒</button>
         </>);

};
export default button