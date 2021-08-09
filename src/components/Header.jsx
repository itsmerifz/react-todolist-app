import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ showAddToggle, showAdd, clearTodo}) => {
  return (
    <section className="header">
      <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} align='left' />
      <h1 className="header-title">Todo Lists</h1>
      <Button text="Clear" color="red" onClick={clearTodo} align='right' />
    </section>
  );
};
Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodo: PropTypes.func.isRequired
};

export default Header;
