import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import ItemBank from '../../components/itemBank/itemBank'
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header'
import { numberFormat, dateTimeFormat } from "../../Util/util";
import OfferMessage from '../../components/offer_message'
import './style.css'


function ListBank() {
  const history = useHistory();
  const [banks, setBanks] = useState([])
  const [balanceAccounts, setBalanceAccounts] = useState("50")

  useEffect(() => {
    fetch('https://jsonbox.io/box_ddb0ab5da8d69da8c315/banks')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.map(item => {
          item.valueCredit = item.accounts[0].accountExtract.reduce((prev, next) => prev + next.value, 0).toFixed(2)
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

  function handleDetail(id) {
    console.log(id);
    history.push(`/menuBank/${id}`);
  }

  return (
    <>
      <div className="nav">
        <header className="hal">
          <Nav link='/listBank'></Nav>
        </header>
      </div>
      <Header />
      <div className="list-card-bank">
        <div className="message">
          <OfferMessage />
          </div>
        <ul>
          {banks.map(item => (
            <ItemBank
              numBank={item.bankNumber}
              nameBank={item.name}
              balanceAccount={numberFormat.format(item.accounts[0].balance)}
              accountNumber={item.accounts[0].accountNumber}
              agencyNumber={item.accounts[0].agency}
              valueCredit={numberFormat.format(item.valueCredit)}
              onClick={() => handleDetail(item._id)}
            />))}
        </ul>
        <div className="totalcreditc">
          <span className="saldo">SALDO DISPONÍVEL DE TODAS AS CONTAS:  {numberFormat.format(balanceAccounts)} </span>
        </div>
      </div>
    </>
  )
}
export default ListBank; 