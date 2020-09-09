import React from 'react';
import './style.css'


const ItemBank = ({ numBank, nameBank, saldoAcount }) => (
  <li className="bank">
    <span>{numBank}</span>
    <div className="info-bank">
      <span>{nameBank}</span>
      <span>Saldo disponivél: {saldoAcount}</span>
    </div>
  </li>
)

export default ItemBank;