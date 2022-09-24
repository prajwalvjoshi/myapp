import React from 'react'
import { useState } from 'react'
function Form(props) {
  const [ToDo, setTodo] = useState({ name: "", completed: false });
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addToDoCallback(ToDo);
    setTodo({ name: "", completed: false });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={ToDo.name} placeholder="enter a todo" onChange={(e) => setTodo({ name: e.target.value, completed: false })} />
        <button>Add</button>
      </form>
    </div>
  )
}
export default Form