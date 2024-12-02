import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [employees, SetEmployees]=useState([
    {name:'Akshar', role:'developer', img:'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg'},
    {name:'Yash', role:'Manager', img:'https://images.pexels.com/photos/983451/pexels-photo-983451.png'},
    {name:'Arham', role:'Designer', img:'https://images.pexels.com/photos/938639/pexels-photo-938639.jpeg'},
    {name:'Sam', role:'Accountant', img:'https://images.pexels.com/photos/2955247/pexels-photo-2955247.jpeg'},
    {name:'Ashutosh', role:'Developer', img:'oldman.jpg'},
    {name:"Parth", role:'MERN', img:"oldman.jpg"}
    
  ]);
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
      <div className='flex flex-wrap justify-center'>

          {employees.map((employee)=>{
             console.log(employee);
             return( <Employee 
              name={employee.name}
              role={employee.role}
              img={employee.img}
              />)
          })}
      </div>
          </>
        ):(
          <h1>You cannot view</h1>
          )}
       
      
    </div>
  );
}

export default App;
