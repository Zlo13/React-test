import React from "react";

export default function TodosItem ({id, title, completed}){

  const cls = ['todos__label']

  if(completed){
    cls.push('todos__label_completed')
  }

  return(
    <li className = 'todos__item'>
      <label className = {cls.join(' ')}>
        <input className = 'todos__checkbox' type="checkbox"/>
        {title}
      </label>
      <button className = 'todos__close'>&times;</button>
    </li>
  )
}