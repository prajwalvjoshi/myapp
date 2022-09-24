import React from 'react'
import App from './App';
function Welcome (Props){
    return(
        <div>
            <h1>welcome {Props.name}</h1>
            <h1>branch=ECE {Props.branch}</h1>
            
            <h1>email =prajwal@gmail.com {Props.email}</h1>
            <h1>USN=4MK19EC016 {Props.USN}</h1>
        </div>
    );
}
function Props() {
  return (
    <Welcome name='Joshi' />
  );
}

export default App;