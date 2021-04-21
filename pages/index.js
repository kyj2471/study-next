import React, { useState } from 'react';
import TodoForm from '../src/component/TodoForm';
import TodoList from '../src/component/TodoList';
import styled from 'styled-components';
import Header from '../src/component/Header';

const FullWrapperContent = styled.div`
  max-width: 450px;
  margin: 0 auto;
  text-align: center;
  .titleOfApp {
    margin-top: 50px;
  }

  .titleOfApp {
    margin-top: 70px;
  }
`;

function Home() {
  // const [myModal, setMyModal] = useState(false);
  return (
    <FullWrapperContent>
      {/* <Header myModal={myModal} setMyModal={setMyModal} /> */}
      <h1 className="titleOfApp">해야만 한다</h1>
      <div>
        <TodoForm />
        <TodoList />
      </div>
    </FullWrapperContent>
  );
}

export default Home;
