import { ADD_TODO, UPDATE_TODO, DELETE_TODO, CHECKED_TODO } from '../actions/actions';

const initialState = [
  {
    id: 0,
    name: 'Redux',
    checked: false
  }
];

export const reducer = (state = initialState, action) => {
  let newTodos = [...state];

  switch (action.type) {
    case ADD_TODO:
      return newTodos.concat(action.payload);
    case DELETE_TODO:
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
      return newTodos;
    case UPDATE_TODO:
      return updateTodo(newTodos, action);
    case CHECKED_TODO:
      return checkedTodo(newTodos, action);
  }
  return state;
};

function updateTodo(newTodos, action) {
  const index = newTodos.findIndex((todo) => todo.id === action.payload.id);
  newTodos[index] = action.payload;
  return newTodos;
}

function checkedTodo(newTodos, action) {
  const findCheckedIndex = newTodos.findIndex((todo) => todo.id === action.payload.id);
  newTodos[findCheckedIndex].checked = !newTodos[findCheckedIndex].checked;
  return newTodos;
}
