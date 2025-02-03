import Student from './Students.jsx'

function App() {
  
  return(
    <>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Ptrick" age={45} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/> 
       <Student/>
    </>
  );
}

export default App