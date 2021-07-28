import React,{useState} from 'react';
import PropTypes from 'prop-types';

const Form = ({addTodo}) => {
  const [value,setValue] = useState("")

  const formHandler = e =>{
    e.preventDefault()
    if(!value){
      alert("Todo blank!")
      return
    }
    addTodo(value)
    setValue("")
  }
  return(
    <section className="add">
      <form className="add-form" onSubmit={formHandler}>
        <input type="text" className="add-input" value={value} onChange={e => setValue(e.target.value)}/>
        <button className="add-btn hitam">Add</button>
      </form>
    </section>
  )
}
Form.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Form;