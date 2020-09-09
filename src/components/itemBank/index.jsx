import React from 'react';
import './style.css'


const ItemBank = ({ numBank, nameBank, balanceAccount }) => (
  <li className="bank">
    <span>{numBank}</span>
    <div className="info-bank">
      <span>{nameBank}</span>
      <span>Saldo disponivél: {balanceAccount}</span>
    </div>
  </li>
)

export default ItemBank;