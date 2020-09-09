import React, { useState } from 'react';
import ItemBank from '../../components/itemBank'
import './style.css'

function ListBank() {
  const [banks, setBanks] = useState([{
    num: "422",
    name: "Banco Safra S.A",
    saldo: 1000
  }])

  return (
    <>
      <h1>header</h1>
      <ul>
        {banks.map(item => (<ItemBank numBank={item.num} nameBank={item.name} saldoAcount={item.saldo} />))}
      </ul>
      <span className="saldo">SALDO DISPONÍVEL DE TODAS AS CONTAS:   R$   R$: 5.000,00</span>

    </>
  )
}
export default ListBank;