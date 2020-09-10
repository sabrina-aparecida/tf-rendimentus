import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Nav from '../../components/nav/Nav';

function Extrato() {
  let { id } = useParams();
  const [extract, setExtract] = useState();

  useEffect(() => {
    fetch(`https://jsonbox.io/box_ddb0ab5da8d69da8c315/banks/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
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
      <h1>header</h1>
      <ul>
        {extract.accounts[0].accountExtract.map(item => (
          <li>
            <span>{item.name}</span>
            <span>{item.value}</span>
            <span>{item.date}</span>
          </li>
        ))}
      </ul>

    </>
  )
}
export default Extrato;