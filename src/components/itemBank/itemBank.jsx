import React from 'react';
import './style.css'


const ItemBank = ({ numBank, nameBank, balanceAccount, accountNumber, agencyNumber, valueCredit, onClick }) => (
  <li className="bank" onClick={onClick}>
    <span>{numBank}</span>
    <div className="info-bank">
      <span className="namebankintro">{nameBank}</span>
      <span className="balancesaldo">Saldo: R${balanceAccount},00</span>
      <span>Conta: {accountNumber}</span>
      <span>Agência: {agencyNumber}</span>
      <span className="cardcreditvalue">Fatura do Cartão Crédito: {valueCredit}</span>
    </div>
  </li>
)

export default ItemBank;