import React,{useState} from 'react';
import Paper from '../components/Paper';
import Header from '../components/Header';
import Form from '../components/Form';
import Todos from '../components/Todos';

const TodoList = () =>{
  const [todos,setTodos] = useState([
    {text: "Belajar React"},
    {text: "Belajar Vue"},
    {text: "Belajar Angular"}
  ])

  const [showAdd,setShowAdd] = useState(false)
  const showAddToggle = () => setShowAdd(!showAdd)

  const addTodo = val =>{
    const addedTodo = [...todos, {text: val}]
    setTodos(addedTodo)
  }

  return (
        <Paper>
          <Header showAddToggle={showAddToggle} showAdd={showAdd} />
          <Form addTodo={addTodo} showAdd={showAdd} />
          <Todos todos={todos} />
        </Paper>
  );
}
export default TodoList;
