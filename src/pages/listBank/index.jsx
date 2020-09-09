import React, { useState, useEffect } from 'react';
import ItemBank from '../../components/itemBank'
import './style.css'
import api from "../../service/api";


function ListBank() {
  const [banks, setBanks] = useState([])

  useEffect(() => {
    api
      .get("banks"
      )
      .then((response) => {
        setBanks(response.data);
      })
      .catch((e) => {
        alert("ocorreu um erro ao tentar obter os dados");
      });
  }, []);

  return (
    <>
      <h1>header</h1>
      <ul>
        {banks.map(item => (<ItemBank numBank={item.bankNumber} nameBank={item.name} saldoAcount={item.saldo} />))}
      </ul>
      <span className="saldo">SALDO DISPONÍVEL DE TODAS AS CONTAS:   R$   R$: 5.000,00</span>

    </>
  )
}
export default ListBank;