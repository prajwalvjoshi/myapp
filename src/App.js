import logo from './logo.svg';
import './App.css';
import './Portpolio.js'
import Portpolio from './Portpolio.js';
import image from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Form from './Form.jsx';
import ToDoList from './ToDoList.jsx';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
    <NavBar></NavBar>
      <Routes>
      <Route path="/about" element={<About/>}></Route>
       <Route path="/contact" element={<Contact />}></Route> 
       <Route path="/team" element={<Teams />}></Route>
       <Route path="/form" element={<Form />}></Route>
       <Route path="/To-Do-List" element={<ToDoList />}></Route>
       </Routes>
        
        </BrowserRouter>

    </div>)
}
function About(){
  return (
    <div>
      this is my about component
    </div>
  )
}
function Contact(){
  return (
    <div>this is contact component</div>
  )
  
}
function Teams(){
  return (
    <div>
      team members 
      <br></br>
      <table>
        <tr>
      <tr>joshi sukesh sumaan veerendra chidu pratham</tr>
      </tr>
      </table>
    </div>
  )
}
function NavBar(){
  return(
  <div className="App">
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/team">Teams</Link>
    <Link to="/form">Form</Link>
    <Link to="/To-Do-List">To Do list</Link>
    
  </div>
  )
}

export default App;