import React, { useState, useEffect } from 'react';
import '../styles/globals.css';
import TodoForm from '../src/component/TodoForm';
import Header from '../src/component/Header';
import TodoList from '../src/component/TodoList';
import styled from 'styled-components';

function MyApp() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [myModal, setMyModal] = useState(false);

  return (
    <FullWrapperContent>
      <Header myModal={myModal} setMyModal={setMyModal} />
      <h1 className="titleOfApp">해야만 한다</h1>
      <div>
        <TodoForm
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
      </div>
    </FullWrapperContent>
  );
}

export default MyApp;

const FullWrapperContent = styled.div`
  max-width: 450px;
  margin: 0 auto;
  text-align: center;

  .titleOfApp {
    margin-top: 50px;
  }
`;
