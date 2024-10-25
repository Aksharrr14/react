import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole]=useState();
  const showEmployees=true;
  return (
    <div className="App">
        {showEmployees?(
      <>
      <input type='text' onChange={(e)=>{
        console.log(e.target.value)
        setRole(e.target.value)
      }}/>
          <Employee name="Akshar" role="developer"/>
          <Employee name="Yash" role={role}/>
          <Employee name="Arham" role="Designer"/>
          </>
        ):(
          <h1>You cannot view</h1>
          )}
       
      
    </div>
  );
}

export default App;
