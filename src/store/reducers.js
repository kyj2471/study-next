import { ADD_TODO, UPDATE_TODO, DELETE_TODO, CHECKED_TODO } from './actions';
import { todos } from './states';

export const reducer = (state = todos, action) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      newTodos = [...state];
      newTodos.push(action.payload);
      return newTodos;
    case DELETE_TODO:
      newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
      return newTodos;
    case UPDATE_TODO:
      newTodos = [...state];
      let index = -1;
      for (let i = 0; i < newTodos.length; i++) {
        index++;
        if (newTodos[i].id == action.payload.id) {
          break;
        }
      }
      if (index !== -1) {
        newTodos[index] = action.payload;
        return newTodos;
      }
    case CHECKED_TODO:
      newTodos = [...state];
      let findCheckedIndex = -1;
      for (let i = 0; i < newTodos.length; i++) {
        findCheckedIndex++;
        if (newTodos[i].id == action.payload.id) {
          break;
        }
      }
      if (findCheckedIndex !== -1) {
        newTodos[findCheckedIndex].checked = !newTodos[findCheckedIndex].checked;
        return newTodos;
      }
  }
  return state;
};

var test = 1;
test = 2;
