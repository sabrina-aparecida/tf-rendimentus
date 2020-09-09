import React, { useState } from 'react';
import ItemBank from '../../components/itemBank'
import Card_product from '../../components/card_product'


function Oferts() {
  const [banks, setBanks] = useState([{
    num: "422",
    name: "Banco Safra S.A",
    saldo: 1000
  }])
    return (
      <>
        <header>
            header
            </header>
            <Card_product></Card_product>
           </>
    )
}
export default Oferts;