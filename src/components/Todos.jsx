import React from 'react';
import Todo from './Todo';

const Todos = () =>{
  const todos = [
    {
      text: "Test React"
    },
    {
      text: "Test JS"
    },
    {
      text: "Test Vue"
    }
  ]
  return(
    <section className="todos">
      {todos.map(todo =>{
        return <Todo text={todo.text}/>
      })}
    </section>
  )
}
export default Todos;