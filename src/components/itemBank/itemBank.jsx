import React from 'react';
import './style.css'


const ItemBank = ({ numBank, nameBank, balanceAccount, accountNumber, agencyNumber, valueCredit, onClick }) => (
  <li className="bank" onClick={onClick}>
    <span className="numberbank">{numBank}</span>
    <div className="info-bank">
    <span className="namebankintro">{nameBank}</span>
    <span><strong className="alt-name-card">Agência:</strong> {agencyNumber}
      </span>
      <span><strong className="alt-name-card">Conta:</strong> {accountNumber}
      </span>
      <span className="balancesaldo"><strong className="alt-name-card">Saldo:</strong> {balanceAccount}
      </span>
      <span className="cardcreditvalue"><strong className="alt-name-card">Fatura do Cartão Crédito:</strong> {valueCredit}</span>
    </div>
  </li>
)

export default ItemBank;