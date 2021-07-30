import React from 'react';
import PropTypes  from "prop-types";

const Header = ({showAddToggle, showAdd, clearTodo}) =>{
  return(
    <section className="header">
        <button className="header-btn hitam" onClick={showAddToggle}>{
          showAdd ? 'Finish' : 'Add'
        }</button>
        <h1 className="header-title">Todo Lists</h1>
        <button className="header-btn merah" onClick={clearTodo}>Clear</button>
    </section>
  )
}
Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodo: PropTypes.func.isRequired
}

export default Header;