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
    if(todos.length < 10){
      const addedTodo = [...todos, {text: val, isCompleted: false}]
      setTodos(addedTodo)
    }else{
      alert('Only make 10 todos!')
    }
  }

  const clearTodo = () => !showAdd && setTodos([])

  const completeTodo = (index) =>{
    const addedTodo = [...todos]
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted

    setTodos(addedTodo)
  }

  return (
        <Paper>
          <Header clearTodo={clearTodo} showAddToggle={showAddToggle} showAdd={showAdd} />
          <Form addTodo={addTodo} showAdd={showAdd} />
          <Todos todos={todos} completeTodo={completeTodo} />
        </Paper>
  );
}
export default TodoList;