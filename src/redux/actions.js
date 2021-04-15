import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './actionTypes.js';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  };
}

export function deleteTodo(todoId) {
  return {
    type: DELETE_TODO,
    payload: todoId
  };
}

export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    payload: todo
  };
}
