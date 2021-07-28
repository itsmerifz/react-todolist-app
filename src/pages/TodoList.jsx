import React from 'react';
import Paper from '../components/Paper';
import Header from '../components/Header';
import Form from '../components/Form';
import Todos from '../components/Todos';

const TodoList = () =>{
  return (
        <Paper>
          <Header />
          <Form />
          <Todos />
        </Paper>
  );
}
export default TodoList;
