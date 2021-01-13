import React, {useContext} from "react";
import {Context} from '../../context'

export default function TodosItem({id, title, completed}) {
  const {dispatch} = useContext(Context)
  const cls = ['todos__label']

  if (completed) {
    cls.push('todos__label_completed')
  }

  return (
    <li className='todos__item'>
      <label className={cls.join(' ')}>
        <input
          className='todos__checkbox'
          type="checkbox"
          checked={completed}
          onChange={() => dispatch({
            type: 'toggle',
            payload: id
          })}
        />
        {title}
      </label>

      <button
        className='todos__close'
        onClick={() => dispatch({
          type: 'remove',
          payload: id
        })}
      >
        &times;
      </button>
    </li>
  )
}