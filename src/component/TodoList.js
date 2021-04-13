import React, { memo, useCallback } from "react";
import styled from "styled-components";
import Link from "next/link";

const TodoListItemFullWrapper = styled.div`
  margin-top: 50px;

  .todoListItem {
    display: flex;
    justify-content: space-around;
    margin-top: 1.3rem;

    .listItem {
      width: 230px;
      border: none;
      border-radius: 4px;
    }

    .listItemFinish {
      width: 230px;
      border: none;
      border-radius: 4px;
      text-decoration: line-through;
    }

    button {
      width: 50px;
      height: 35px;
      font-family: "Roboto", sans-serif;
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
    }

    button:hover {
      background-color: #2ee59d;
      box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
      color: #fff;
      transform: translateY(-7px);
    }
  }
`;

const TodoList = memo(({ todos, setTodos, setEditTodo }) => {
  const handleDelete = useCallback(
    ({ id }) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const handleComplete = useCallback((todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  });

  const handleEdit = useCallback(({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  });

  return (
    <TodoListItemFullWrapper>
      {todos.map((todo) => {
        return (
          <div className="todoListItem" key={todo.id}>
            <Link href={`/post/${todo.title}`}>
              <input
                type="text"
                value={todo.title}
                className={todo.completed ? "listItemFinish" : "listItem"}
                onChange={(e) => e.preventDefault()}
              />
            </Link>

            <button
              className="completeBtn"
              onClick={() => handleComplete(todo)}
            >
              완료
            </button>
            <button className="editBtn" onClick={() => handleEdit(todo)}>
              수정
            </button>
            <button className="deleteBtn" onClick={() => handleDelete(todo)}>
              삭제
            </button>
          </div>
        );
      })}
    </TodoListItemFullWrapper>
  );
});

export default TodoList;
