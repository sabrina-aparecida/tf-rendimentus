import React from 'react';
import Image from '../../components/image/image';
import './style.css'
const Button = ({ name2,name, item, onClick, icon }) => {
  return (
    <div className="btn-options" onClick={onClick}>
      <Image src={icon} alt="profile" class="profile-user-btn" />
      <span class = "title">{name}</span>
      <span class = "title">{name2}</span>
      <span class = "subtitle">{item}</span>
    </div>
  )
}

export default Button;