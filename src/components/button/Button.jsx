import React from 'react';
import Image from '../../components/image/image';

const Button = ({ name, item, onClick, icon }) => {
  return (
    <div className="btn-options" onClick={onClick}>
      <Image src={icon} alt="profile" className="profile-user" />
      <span>{name}</span>
      <span>{item}</span>
    </div>
  )
}

export default Button;

