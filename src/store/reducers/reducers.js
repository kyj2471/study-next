import { ADD_TODO, UPDATE_TODO, DELETE_TODO, CHECKED_TODO } from '../actions/actions';

const initialState = [
  {
    id: 0,
    name: 'Redux',
    checked: false
  }
];

export const reducer = (state = initialState, action) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      newTodos = [...state];
      return state.concat(action.payload);
    case DELETE_TODO:
      newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
      return newTodos;
    case UPDATE_TODO:
      newTodos = [...state];
      const index = newTodos.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        newTodos[index] = action.payload;
        return newTodos;
      }
    case CHECKED_TODO:
      newTodos = [...state];
      const findCheckedIndex = newTodos.findIndex((todo) => todo.id === action.payload.id);
      if (findCheckedIndex != -1) {
        newTodos[findCheckedIndex].checked = !newTodos[findCheckedIndex].checked;
        return newTodos;
      }
  }
  return state;
};
