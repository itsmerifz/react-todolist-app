import React,{useState} from 'react';
import Paper from '../components/Paper';
import Header from '../components/Header';
import Form from '../components/Form';
import Todos from '../components/Todos';

const TodoList = () =>{
  const [todos,setTodos] = useState([
    {text: "Belajar React", isCompleted: false},
    {text: "Belajar Vue", isCompleted: false},
    {text: "Belajar Angular", isCompleted: false}
  ])

  const [showAdd,setShowAdd] = useState(false)
  const showAddToggle = () => setShowAdd(!showAdd)

  const addTodo = val =>{
    const addedTodo = [...todos, {text: val, isCompleted: false}]
    setTodos(addedTodo)
  }

  const completeTodo = (index) =>{
    const addedTodo = [...todos]
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted

    setTodos(addedTodo)
  }

  return (
        <Paper>
          <Header showAddToggle={showAddToggle} showAdd={showAdd} />
          <Form addTodo={addTodo} showAdd={showAdd} />
          <Todos todos={todos} completeTodo={completeTodo} />
        </Paper>
  );
}
export default TodoList;
