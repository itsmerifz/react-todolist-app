import React,{useState} from 'react';
import PropTypes from 'prop-types';

const Form = ({addTodo, showAdd}) => {
  const [value,setValue] = useState("")

  const formHandler = e =>{
    e.preventDefault()
    if(!value){
      alert("Todo blank!")
      return
    }
    if(value.length > 40){
      alert("Please create a short todo text!")
      setValue("")
      return
    }
    addTodo(value)
    setValue("")
  }
  
  if (showAdd){
    return(
      <section className="add">
        <form className="add-form" onSubmit={formHandler}>
          <input type="text" className="add-input" value={value} onChange={e => setValue(e.target.value)}/>
          <button className="add-btn hitam">Add</button>
        </form>
      </section>
    )
  }
  return null
}
Form.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
}

export default Form;