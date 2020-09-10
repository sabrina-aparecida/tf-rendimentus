import React from 'react';

const Button = ({type, onClick, className, name}) => {
    return <button type={type} onClick={onClick} className={className}>{name}</button>
}