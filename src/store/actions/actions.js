import { createAction } from 'redux-actions';

export const ADD_TODO = 'actions/ADD_TODO';
export const DELETE_TODO = 'actions/DELETE_TODO';
export const UPDATE_TODO = 'actions/UPDATE_TODO';
export const CHECKED_TODO = 'actions/CHECKED_TODO';

export const addTodo = createAction(ADD_TODO, (todo) => todo);
export const deleteTodo = createAction(DELETE_TODO, (todo) => todo);
export const updateTodo = createAction(UPDATE_TODO, (todo) => todo);
export const checkedTodo = createAction(CHECKED_TODO, (todo) => todo);
