import React, { useState, useEffect, memo, useCallback } from "react";
import styled from "styled-components";

const HeadTodoForm = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  .todoInput {
    width: 250px;
    height: 45px;
    border-radius: 4px;
  }

  .todoButton {
    width: 140px;
    height: 45px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    margin-left: 30px;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
  }

  .todoButton:hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
`;

const TodoForm = memo(
  ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
    const updateTodo = (title, id, completed) => {
      const newTodo = todos.map((todo) =>
        todo.id === id ? { title, id, completed } : todo
      );
      setTodos(newTodo);
      setEditTodo("");
    };

    useEffect(() => {
      if (editTodo) {
        setInput(editTodo.title);
      } else {
        setInput("");
      }
    }, [setInput, editTodo]);

    const handleChange = useCallback((e) => {
      setInput(e.target.value);
    }, []);

    const handleSubmit = (e) => {
      e.preventDefault();

      if (editTodo) {
        updateTodo(input, editTodo.id, editTodo.completed);
        setInput("");
      } else {
        setTodos([
          ...todos,
          { id: Date.now(), title: input, completed: false },
        ]);
        setInput("");
      }
    };

    return (
      <HeadTodoForm>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="할일은?"
            className="todoInput"
            value={input}
            required
            onChange={handleChange}
          />
          <button type="submit" className="todoButton" onClick={handleSubmit}>
            SUBMIT
          </button>
        </form>
      </HeadTodoForm>
    );
  }
);

export default TodoForm;
