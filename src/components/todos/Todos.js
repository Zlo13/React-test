import React, {useState, useEffect, useReducer} from "react";
import TodosList from "./TodosList";
import {Context} from '../../context'
import reducer from "../../reducer";
import './todos.css'

export default function Todos() {

  const[state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos') || []))

  const [title, setTitle] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])


  const addTodosHandler = event => {
    if (event.key === 'Enter') {
      dispatch({
        type: 'add',
        payload: title
      })
      setTitle('')
    }
  }

  return (
    <Context.Provider
      value={{ dispatch }}
    >
      <div className='todos'>
        <h2 className='todos__header'>Todos to day</h2>
        <input
          className='todos__input'
          placeholder='todos title'
          type='text'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          onKeyPress={(event) => addTodosHandler(event)}
        />

        <TodosList
          todos={state}
        />

        {
          (state.length)
          ? <h2 className='todos__message'>the list is empty</h2>
          : <h2 className='todos__message_show'>the list is empty</h2>
        }

      </div>
    </Context.Provider>
  )
}