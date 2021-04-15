import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from './actions';
import { todos } from './states';
import React, { useEffect } from 'react';

export let reducer = (state = todos, action) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      newTodos = [...state];
      newTodos = [...state, { id: Date.now(), title: input, completed: false }];
      return newTodos;

    case DELETE_TODO:
      newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
      return newTodos;

    case UPDATE_TODO:
      newTodos = [...state];
      todos.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      useEffect(() => {
        if (editTodo) {
          setInput(editTodo.title);
        } else {
          setInput('');
        }
      }, [setInput, editTodo]);

      newTodos = todos.map((todo) =>
        todo.id === action.payload.id ? { title, id, completed } : todo
      );
      return newTodos;
  }

  return state;
};
