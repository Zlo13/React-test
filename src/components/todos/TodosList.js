import React from "react";
import TodosItem from "./TodosItem";

export default function TodosList ({todos}) {

  return (
    <ul className = 'todos__list'>
      { todos.map(todo =>
            <TodosItem
              key = {todos.id}
              id = {todo.id}
              title = {todo.title}
              completed = {todo.completed}
            />
          )
      }

    </ul>
  )
}