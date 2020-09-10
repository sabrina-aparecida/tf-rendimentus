import React from 'react';
import './style.css'


const ItemBank = ({ numBank, nameBank, balanceAccount, accountNumber, agencyNumber, valueCredit, onClick }) => (
  <li className="bank" onClick={onClick}>
    <span>{numBank}</span>
    <div className="info-bank">
      <span>{nameBank}</span>
      <span>Saldo disponivél: {balanceAccount}</span>
      <span>Conta: {accountNumber}</span>
      <span>Agência: {agencyNumber}</span>
      <span>Fatura Cartão de Crédito: {valueCredit}</span>
    </div>
  </li>
)

export default ItemBank;