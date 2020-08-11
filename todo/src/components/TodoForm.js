import React from 'react'

const TodoForm = props => {

  return(
    <form>
      <input 
        id='todoInput'
        type='text'
        placeholder='type todo'
        value={props.state.inputText}
        onChange={e => props.dispatch({type: 'CHANGE_TODO_TEXT', text: e.target.value})} 
      />
      <button onClick={e => {
        e.preventDefault()
        props.dispatch({type: 'ADD_TODO'})
        document.querySelector('#todoInput').setAttribute('value','')
      }}>Add</button>
      <button onClick={e => {
        e.preventDefault()
        props.dispatch({type: 'REMOVE_COMPLETE'})
      }}>Remove Complete</button>
    </form>
  )
}
export default TodoForm