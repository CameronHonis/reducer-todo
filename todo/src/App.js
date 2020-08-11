import React, { useReducer } from 'react';
import { initialState, todoReducer } from './components/todoReducer'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

function App() {
  const [ state, dispatch ] = useReducer(todoReducer, initialState)

  return (
    <div className='App'>
      <p>test</p>
      <TodoForm state={state} dispatch={dispatch} />
      {state.todos.map(v => (<Todo todoData={v} dispatch={dispatch}/>))}
    </div>
  );
}

export default App;
