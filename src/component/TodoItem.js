import React, { useState } from 'react';
import { deleteTodo, updateTodo, checkedTodo } from '../store/actions/actions';
import styled from 'styled-components';
import { connect } from 'react-redux';
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
    color: red;
  }
  .notDoneTodo {
    color: blue;
  }
`;

function TodoItem({ todo, deleteTodo, updateTodo, checkedTodo, name }) {
  const [IsEditTodo, setIsEditTodo] = useState(false);
  const [input, setInput] = useState(todo.name);
  const [isChecked, setIsChecked] = useState(false);

  const handleUpdate = () => {
    updateTodo({
      ...todo,
      name: input
    });
    if (IsEditTodo) {
      setInput(todo.name);
    }
    setIsEditTodo(!IsEditTodo);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleChecked = () => {
    checkedTodo({ ...todo });
    if (isChecked) {
      setIsChecked(todo.checked);
    }
    setIsChecked(!isChecked);
  };

  // const handleChecked = () => {
  //   checkedTodo(todo);
  //   console.log(todo);
  //   console.log(todo.checked);
  // };

  const todoClassName = todo.checked ? 'doneTodo' : 'notDoneTodo';

  return (
    <TodoItemFull>
      <div className="listItems">
        {IsEditTodo ? (
          <input type="text" value={name} onChange={handleChange} />
        ) : (
          <div className={todoClassName}>{todo.name}</div>
        )}
      </div>
      <div>
        <button onClick={handleUpdate}>{IsEditTodo ? '변경' : '수정'}</button>
        <button onClick={handleDelete}>삭제</button>
        <button onClick={handleChecked}>완료</button>
      </div>
    </TodoItemFull>
  );
}

const mapStateToProps = ({ updateTodo, deleteTodo, checkedTodo }) => ({
  updateTodo,
  deleteTodo,
  checkedTodo
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),
  checkedTodo: (todo) => dispatch(checkedTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
