import React from 'react';

const Button = ({ name, item, onClick }) => {
  return (
    <div className="btn-options" onClick={onClick}>
      <span>{name}</span>
      <span>{item}</span>
    </div>
  )
}

export default Button;

