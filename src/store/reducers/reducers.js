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
      return addTodo(newTodos, action);
    case DELETE_TODO:
      return deleteTodo(newTodos, action);
    case UPDATE_TODO:
      return updateTodo(newTodos, action);
    case CHECKED_TODO:
      return checkedTodo(newTodos, action);
  }
  return state;
};

function addTodo(newTodos, action) {
  return newTodos.concat(action.payload);
}

function deleteTodo(newTodos, action) {
  newTodos = newTodos.filter((todo) => todo.id !== action.payload);
  return newTodos;
}

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
