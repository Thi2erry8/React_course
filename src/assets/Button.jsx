import Proptypes from 'prop-types'

function button(props){
         
  const handleClick = () => console.log("OUCH!")  ;
  
  return(<>
             <button onClick={handleClick}>Click me😒</button>
         </>);

};
export default button