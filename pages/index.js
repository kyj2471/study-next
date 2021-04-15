import React, { useState } from 'react';
import TodoForm from '../src/component/TodoForm';
import TodoList from '../src/component/TodoList';
import styled from 'styled-components';

const FullWrapperContent = styled.div`
  max-width: 450px;
  margin: 0 auto;
  text-align: center;
  .titleOfApp {
    margin-top: 50px;
  }
`;

function Home() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <FullWrapperContent>
      <h1 className="titleOfApp">해야만 한다</h1>
      <h1 className="titleOfApp"></h1>
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

export default Home;
