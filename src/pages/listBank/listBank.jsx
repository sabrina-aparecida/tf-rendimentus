import React, { useState, useEffect } from 'react';
import ItemBank from '../../components/itemBank/itemBank'
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header'
import './style.css'


function ListBank() {
  const [banks, setBanks] = useState([])
  const [balanceAccounts, setBalanceAccounts] = useState("50")

  useEffect(() => {
    fetch('https://jsonbox.io/box_ddb0ab5da8d69da8c315/banks')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.map(item => {
          item.valueExtract = item.accounts[0].accountExtract.reduce((prev, next) => prev + next.value, 0).toFixed(2)
          return item;
        })
        const balance = data.reduce((prev, next) => prev + next.accounts[0].balance, 0).toFixed(2)
        setBanks(data);
        setBalanceAccounts(balance);

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
        {banks.map(item => (
          <ItemBank numBank={item.bankNumber}
            nameBank={item.name}
            balanceAccount={item.accounts[0].balance}
            valueExtract={item.valueExtract}
            accountNumber={item.accounts[0].accountNumber}
            agencyNumber={item.accounts[0].agency}
            valueCredit={item.accounts[0].credit}
          />))}
      </ul>
<<<<<<< HEAD:src/pages/listBank/listBank.jsx
      <span className="saldo">SALDO DISPONÍVEL DE TODAS AS CONTAS:   R$: 5.000,00</span>
    </div>
=======
      <span className="saldo">SALDO DISPONÍVEL DE TODAS AS CONTAS:  {balanceAccounts} </span>
>>>>>>> ef1afe113548958a67d1cb0b49a2f73325aaecef:src/pages/listBank/index.jsx
    </>
  )
}
export default ListBank; 