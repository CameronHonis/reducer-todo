import React from 'react'

const Todo = props => {
  return(
    <div className='todo'>
      <p className={props.todoData.completed ? 'completed' : ''}>{props.todoData.text}</p>
      <input type='checkbox' onClick={() => props.dispatch({type: 'TOGGLE_COMPLETE', id: props.todoData.id})}></input>
    </div>
  )
}

export default Todo