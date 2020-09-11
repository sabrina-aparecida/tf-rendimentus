import React, { useState } from 'react';
import './style.css'



const Card_product = ({ numBank, nameBank, rate, value, maxInstallments, onClick }) => (

  <li className="offer" >
    <table>
      <tr >
        <td className="numBank" rowspan="5">{numBank}</td>
        <td>{nameBank}</td>
      </tr>
      <tr>
        <td>Taxa de juros: {rate}%</td>
      </tr>
      <tr>
        <td>Crédito pré aprovado: R$ {value},00</td>
      </tr>
      <tr>
        <td>Parcelas: {maxInstallments}</td>
      </tr>
      <tr>
        <td>
<button onClick={onClick} className="btnProposal">RECEBER PROPOSTA</button>
        </td>
      </tr>
    </table>
    
  </li>

)

export default Card_product;
