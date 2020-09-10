import React, { useState, useEffect } from 'react';
import Card_product from '../../components/card_product'
import Header from '../../components/header/Header'

function Offers() {
  const [offers, setOffers] = useState([])
  const [order, setOrderby] = useState("rate|asc")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonbox.io/box_ddb0ab5da8d69da8c315/offers')
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        const orderby = order.split("|")

        const list = data.sort((prev, next) => {
          if (orderby[1] == "asc") {
            if (prev[orderby[0]] < next[orderby[0]]) {
              return -1
            }
            if (prev[orderby[0]] > next[orderby[0]]) {
              return 1
            }
          } else {
            if (prev[orderby[0]] > next[orderby[0]]) {
              return -1
            }
            if (prev[orderby[0]] < next[orderby[0]]) {
              return 1
            }
          }
          return 0
        })
        setOffers(list);
        setLoading(false);

      })
      .catch((e) => {
        alert("ocorreu ssss");
      });
  }, [order]);

  return (

    <>

      <h1><rotasTheader /></h1>
      <h2>Escolha a opção que mais se adequa a você:</h2>

      <div>
        <p>Ordenar por:</p>
        <select name="" id="" onChange={e => setOrderby(e.target.value)}>
          <option value="rate|asc">Menor taxa de juros</option>
          <option value="value|desc">Maior crédito</option>
          <option value="maxInstallments|desc">Maior parcelamento</option>
        </select>
      </div>
      {
        loading ?
          <div>carregando</div>
          :
          <ul className="offers" >
            {offers.map(item => (
              <Card_product
                numBank={item.bank.cod}
                nameBank={item.bank.name}
                rate={item.rate}
                value={item.value}
                maxInstallments={item.maxInstallments}

              />
            ))}
          </ul>
      }

    </>

  )

}
export default Offers;