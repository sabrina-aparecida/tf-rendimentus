import React from 'react';

const ItemBank = ({ numBank, nameBank, saldoAcount }) => (
  <li>
    <span>{numBank}</span>
    <div>
      <span>{nameBank}</span>
      <span>Saldo disponivél: {saldoAcount}</span>
    </div>
  </li>
)

export default ItemBank;