import React from 'react';
import PropTypes from 'prop-types';

const Button = ({text, onClick, color, align}) => {
  const classNames = [
    'header-btn',
    color === 'black' && 'hitam',
    color === 'red' && 'merah',
    align === 'left' && 'teks-kiri',
    align === 'right' && 'teks-kanan'
  ].join(' ')

  return(
    <button className={classNames} onClick={onClick}>{text}</button>
  )
}
Button.defaultProps = {
  text: 'Button',
  color: 'black',
  align: 'left'
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['black', 'red']),
  align: PropTypes.oneOf(['left', 'right'])
}

export default Button