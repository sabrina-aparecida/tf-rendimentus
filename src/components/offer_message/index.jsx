import React, { useState, useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";


function OfferMessage() {
  const history = useHistory();
  const [sum, setSum] = useState([])

  useEffect(() => {
    fetch('https://jsonbox.io/box_ddb0ab5da8d69da8c315/banks')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const sum = data.map(bank => {

          return {
            sumBalance: bank.accounts.reduce((accumulator, currentValue) => (accumulator + currentValue.balance), 0),
            sumExtract: bank.accounts
              .map(account => {
                return account.accountExtract
                  .reduce((accumulator, currentValue) => (accumulator + currentValue.value), 0)
              })
              .reduce((accumulator, currentValue) => (accumulator + currentValue), 0)
          }
        })
          .reduce((accumulator, currentValue) => ({
            totalBalance: accumulator.totalBalance + currentValue.sumBalance,
            totalExtract: accumulator.totalExtract + currentValue.sumExtract,
          }), { totalBalance: 0, totalExtract: 0 })
        setSum(sum)
      })
      .catch((e) => {
        console.log(e)
        alert("ocorreu um erro ao tentar obter os dados");
      });
  }, []);

  return (
    <div>
      {
        ((sum.totalExtract / sum.totalBalance * 100) >= 70) ?

          <div className="alert-message">
            Seu saldo atual é de R${sum.totalBalance}.
Consulte nossos planos de créditos para facilitar sua vida e você não ficar sem dinheiro, compare nosso planos.<Link className="click" onClick={() => history.push(`/offers`)}> CLIQUE AQUI!</Link>
          </div>

          : ""

      }

    </div>

  )

}
export default OfferMessage;