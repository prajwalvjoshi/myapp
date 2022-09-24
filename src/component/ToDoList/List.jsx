import React from 'react'
import Form from './Form'
import { useState } from 'react'
function List() {
    const [ToDos, setToDos] = useState([])
    const addToDo = (ToDo) => {
        const ToDosCopy = [...ToDos]
        ToDosCopy.push(ToDo)
        setToDos(ToDosCopy);
    }
    const markAsComplete = (name) => {
        const idx = ToDos.findIndex(ToDo => ToDo.name === name)
        const ToDosCopy = [...ToDos]
        ToDosCopy[idx].completed = !ToDosCopy[idx].completed;
        setToDos(ToDosCopy);
    }
    return (
        <div>
            <div>
                {ToDos.map((ToDo) => {
                    return <p key={ToDo.name} onClick={() => markAsComplete(ToDo.name)}
                        className={ToDo.completed ? "strike" : ""} > {ToDo.name}
                    </p>;
                })}
            </div>
            <Form addToDoCallback={addToDo} />
        </div >
    )
}
export default List