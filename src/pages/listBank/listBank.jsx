import React, { useState, useEffect } from 'react';
import ItemBank from '../../components/itemBank/itemBank'
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header'
import './style.css'


function ListBank() {
  const [banks, setBanks] = useState([])

  useEffect(() => {
    fetch('https://jsonbox.io/box_ddb0ab5da8d69da8c315/banks')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBanks(data);

      })
      .catch((e) => {
        alert("ocorreu um erro ao tentar obter os dados");
      });
  }, []);

  return (
    <>
    <div className="nav">
      <header className="hal">
        <Nav link='/listBank'></Nav>
      </header>
    </div>
    <Header />
    <div>
      <ul>
        {banks.map(item => (<ItemBank numBank={item.bankNumber} nameBank={item.name} saldoAcount={item.saldo} />))}
      </ul>
      <span className="saldo">SALDO DISPONÍVEL DE TODAS AS CONTAS:   R$: 5.000,00</span>
    </div>
    </>
  )
}
export default ListBank; 