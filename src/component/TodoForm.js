import React, { useState } from 'react';
import { addTodo } from '../store/actions/actions';
import styled from 'styled-components';
import { connect } from 'react-redux';

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

function TodoForm({ addTodo, name }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    addTodo({
      id: Date.now(),
      name: input
    });
    setInput('');
  };

  return (
    <HeadTodoForm>
      <form onSubmit={handleSubmit}>
        <input className="todoInput" value={input} onChange={handleChange} type="text" required />
        <button type="submit" className="todoButton" onClick={handleSubmit}>
          추가
        </button>
      </form>
    </HeadTodoForm>
  );
}

const mapStateToProps = ({ name, addTodo }) => ({
  name,
  addTodo
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
