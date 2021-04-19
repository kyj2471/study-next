import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo, checkedTodo } from '../store/actions';
import styled from 'styled-components';
import Link from 'next/link';
const TodoItemFull = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;

  button {
    width: 50px;
    height: 35px;
    font-family: 'Roboto', sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    margin-left: 35px;
  }

  button:hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }

  .doneTodo {
    text-decoration: line-through;
  }
`;

function TodoItem({ todo }) {
  const [IsEditTodo, setIsEditTodo] = useState(false);
  const [name, setName] = useState(todo.name);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(
      updateTodo({
        ...todo,
        name: name
      })
    );
    if (IsEditTodo) {
      setName(todo.name);
    }
    setIsEditTodo(!IsEditTodo);
  };

  const handleChange = (e) => {
    console.log(e);
    setName(e.target.value);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleChecked = () => {
    dispatch(
      checkedTodo({
        ...todo
      })
    );
  };

  const todoClassName = todo.checked ? 'doneTodo' : 'notDoneTodo';

  return (
    <TodoItemFull>
      {/* <Link href={`/post/${todo.name}`}> */}
      <div className="listItems">
        {IsEditTodo ? (
          <input type="text" value={name} onChange={handleChange} />
        ) : (
          <div className={todoClassName}>{todo.name}</div>
        )}
      </div>
      {/* </Link> */}
      <div>
        <button onClick={handleUpdate}>{IsEditTodo ? '변경' : '수정'}</button>
        <button onClick={handleDelete}>삭제</button>
        <button onClick={handleChecked}>완료</button>
      </div>
    </TodoItemFull>
  );
}

export default TodoItem;
