import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const TodoListItemFullWrapper = styled.div`
  margin-top: 50px;
`;

function TodoList() {
  const todos = useSelector((state) => state);

  return (
    <TodoListItemFullWrapper>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </TodoListItemFullWrapper>
  );
}

export default TodoList;
