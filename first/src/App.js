import { useState } from 'react' ; // This will allow us to call the state
import './App.css';
// This is how we build the react components of our web-sites, these components are rendered in the index.js, into the root
const App = () => { // This is an arrow function component 
  // This is a functional component, which are commonly used instead of classes to build the web-site
  // The curly braces, is where, we can put javascript expressions

  //----------------This is where we use state--------------------//

  
  const [counter, setCounter] = useState(0); // calling the usestate as a function and storing it in an array


  //----------------------At the top of the component---------------------
  return (
    <div className="App"> 
        <button  onClick={() => setCounter(-5)}>-</button> 
        <h1> {counter} </h1> 
        <button> + </button>
    </div>
  );
}

export default App;


//State in a react is a plain JavaScript Object used by React to represent a piece of inforamtion about the componet's current situation 

  // - It is completely managed by the component itself 

  // To create, state in React, we first have to import: import {useState} from 'react' 