import React, {useState} from "react";
import TodosList from "./TodosList";
import './todos.css'

export default function Todos () {

  const [todos, setTodos] = useState([
    {id:1, title: 'First todos', completed: false},
    {id:2, title: 'Second todos', completed: false},
    {id:3, title: 'Three todos', completed: true},
  ])

  return(
    <div className = 'todos'>
      <h2 className = 'todos__header'>Todos to day</h2>
      <hr/>
      <TodosList
        todos = {todos}
      />
    </div>
  )
}