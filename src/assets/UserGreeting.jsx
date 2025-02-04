import Proptypes from 'prop-types'

function UserGreeting(props){
  if(props.isLoggedIn){
     return <h2>
           Welcome {props.username}
     </h2>
  }else{
    return <h2>
          Log in to continue
    </h2>
  };
};
UserGreeting.prototypes ={
    isLoggedIn: Proptypes.bool,
    username: Proptypes.string,
} 
UserGreeting.defaultProps ={
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting