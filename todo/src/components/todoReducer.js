export const initialState = {
  todos: [],
  inputText: '',
}

let nextId = 0

export const todoReducer = (state, action) => {
  switch (action.type){
    case 'ADD_TODO':
      return {...state, inputText: '', todos: [...state.todos, {text: state.inputText, completed: false, id: ++nextId}]}
    case 'TOGGLE_COMPLETE':
      return {...state, todos: state.todos.map(v => {
        if (v.id === action.id){
          return {...v, completed: !v.completed}
        }
        return v
      })}
    case 'REMOVE_COMPLETE':
      return {...state, todos: state.todos.filter(v => v.completed)}
    case 'CHANGE_TODO_TEXT':
      return {...state, inputText: action.text}
    default:
      console.warn('todoReducer didnt find action case')
      return state
  }
}