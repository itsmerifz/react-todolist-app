import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

const Todos = ({todos, completeTodo}) =>{
  return(
    <section className="todos">
      {todos.length > 0 &&
        todos.map((todo, index) =>{
          return (<Todo key={index} 
                       text={todo.text} 
                       isCompleted={todo.isCompleted} 
                       completeTodo={completeTodo} 
                       index={index} 
                  />)
      })}
      {todos.length === 0 &&(
        <div className="todo-placeholder">
          Add todo by clicking{" "}<span className="add-todo-placeholder">Add</span> button on top left corner
        </div>
      )}
    </section>
  )
}
Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string
  })),
  completeTodo: PropTypes.func.isRequired
}
export default Todos;