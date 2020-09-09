import React, { useState } from 'react';
import './style.css'



const Card_product = ({ numBank, nameBank, rate, value, maxInstallments }) => (
  
  <li className="offer">
    <table>
      <tr >
        <td className="numBank" rowspan="4">{numBank}</td>
        <td>{nameBank}</td>
      </tr>
      <tr>
        <td>Taxa de juros: {rate}</td>
      </tr>
      <tr>
        <td>Crédito pré aprovado: {value}</td>
      </tr>
      <tr>
        <td>Parcelas: {maxInstallments}</td>
      </tr>
    </table>
  </li>

//   return (
//     <div className="cardProducts">
//     <p> Banco </p>
//     <p> Taxa de juros: </p>
//     <p> Crédito pré aprovado: </p> 
//     <p> Número de Parcelas: </p>

// </div>
//   )
)

export default Card_product;
