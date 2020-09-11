import React, { useState } from 'react';
import './style.css'



const Card_product = ({ numBank, nameBank, rate, value, maxInstallments, onClick }) => (

  <li className="offer" >
    <table>
      <tr >
        <td className="numBank" rowspan="5">{numBank}</td>
        <td className="nameBank">{nameBank}</td>
      </tr>
      <tr>
      <td className="balancesaldo"><strong className="alt-name-card">Taxa de juros:</strong> {rate}%</td>
      </tr>
      <tr>
        <td className="balancesaldo"><strong className="alt-name-card">Credito:</strong> {value},00</td>

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
