import React, { useState } from 'react';
import ItemBank from '../../components/itemBank'

function listBank() {

  return (
    <>
      <h1>header</h1>
      <ul>
        <ItemBank numBank="341" nameBank="Banco Itau Unibanco S.A." saldoAcount="1000" />
        <ItemBank numBank="341" nameBank="Banco Itau Unibanco S.A." saldoAcount="1000" />
        <ItemBank numBank="341" nameBank="Banco Itau Unibanco S.A." saldoAcount="1000" />
        <ItemBank numBank="341" nameBank="Banco Itau Unibanco S.A." saldoAcount="1000" />
      </ul>
      <span>SALDO DISPONÍVEL DE TODAS AS CONTAS:   R$   R$: 5.000,00</span>

    </>
  )
}
export default listBank;