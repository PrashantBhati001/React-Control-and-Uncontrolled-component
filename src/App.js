import './App.css';
import {useState,useRef} from 'react';

/*

// Controlled component

function App() {
const [firstname,setFirstname]=useState("Prashant")
const [lastname,setLastname]=useState("Bhati")

function handlefirstname(e)
{
  console.log(e.target.value);
  setFirstname(e.target.value)
}

function handlelastname(e)
{
  console.log(e.target.value);
  setLastname(e.target.value)
}

  return (
    <div className="App">
      <form>
        <input type="text" value={firstname} onChange={handlefirstname} />
        <br />
        <input type="text" value={lastname} onChange={handlelastname} />
      </form>
      
    </div>
  );
}



*/


//Uncontrolled component

function App() {
  
  const firstref=useRef(null)
  const secondref=useRef(null)

  function handlesubmit(e)
  {
   
    e.preventDefault()
    console.log(firstref.current.value);
    console.log(secondref.current.value);
    const input=document.getElementById("rollno").value
    console.log(input);
  }
  
    return (
      <div className="App">
        <form onSubmit={handlesubmit}>
          <input type="text" ref={firstref} />
          <br />
          <input type="text"  ref={secondref} />
          <br />
          <input type="text"  id="rollno" />
          <br />
          <button>Submit</button>
        </form>
        
      </div>
    );
  }
export default App;
