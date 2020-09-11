import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { numberFormat, dateTimeFormat } from "../../Util/util";

import Nav from '../../components/nav/Nav';
import './style.css';

function Extrato() {
  let { id } = useParams();
  const [extract, setExtract] = useState();

  useEffect(() => {
    fetch(`https://jsonbox.io/box_ddb0ab5da8d69da8c315/banks/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const value = data.accounts[0].accountExtract.reduce((prev, next) => prev + next.value, 0);
        data.valueExtract = numberFormat.format(value);
        setExtract(data);
      })
      .catch((e) => {
        alert("ocorreu um erro ao tentar obter os dados");
      });
  }, [id]);

  if (!extract) return null
  return (
    <>
      <div className="nav">
        <header className="hal">
          <Nav link='/listBank'></Nav>
        </header>
      </div>
      <div className="oi">
        <span>Agencia: {extract.accounts[0].accountNumber}  Conta:{extract.accounts[0].agency}</span>
        <span>Fatura Cartão de Credito</span>
        <ul>
          {extract.accounts[0].accountExtract.map(item => (
            <li>
              <span>{item.name}</span>
              <span> {numberFormat.format(item.value)}</span>
              <span> {dateTimeFormat.format(new Date(item.date))}</span>
            </li>
          ))}
        </ul>
        <span>Total Fatuta: {extract.valueExtract}</span>
      </div>



    </>
  )
}
export default Extrato;