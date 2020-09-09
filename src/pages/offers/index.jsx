import React, { useState, useEffect } from 'react';
import ItemBank from '../../components/itemBank'
import Card_product from '../../components/card_product'



function Offers() {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    fetch('https://jsonbox.io/box_ddb0ab5da8d69da8c315/offers')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setOffers(data);

      })
      .catch((e) => {
        alert("ocorreu um erro ao tentar obter os dados");
      });
  }, []);

    return (

<>
      <h1>header</h1>
      <ul className="offers">
        {offers.map(item => (<Card_product numBank={item.bank.cod} nameBank={item.bank.name} rate={item.rate} value={item.value} maxInstallments={item.maxInstallments}/>))}
      </ul>
   
    </>
      
    )    
    
}
export default Offers;