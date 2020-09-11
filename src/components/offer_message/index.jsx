import React, { useState, useEffect } from 'react';


function OfferMessage() {
  const [sum, setSum] = useState([])

  useEffect(() => {
    fetch('https://jsonbox.io/box_ddb0ab5da8d69da8c315/banks')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
          //Loop do banco
        const sum = data.map(bank => {

            return {
                //Soma de todos saldos das contas no banco
                sumBalance: bank.accounts.reduce((accumulator, currentValue) => (accumulator + currentValue.balance), 0),
                // Soma de todas as faturas do banco
                sumExtract: bank.accounts
                // Loop de todas as contas
                .map(account => {
                    return account.accountExtract
                    // Soma de todos os itens da fatura da conta
                    .reduce((accumulator, currentValue) => (accumulator + currentValue.value), 0)
                })
                // Soma todos os faturas do banco
                .reduce((accumulator, currentValue) => (accumulator + currentValue), 0)
            }
        })
        // Soma de todos os saldos e faturas de todos os bancos
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
    ((sum.totalExtract / sum.totalBalance * 100) >= 70)?

    <div>
Seu saldo atual é de R${sum.totalBalance}
Consulte aqui nossos planos de créditos para facilitar sua vida e você não ficar sem dinheiro!
    </div>

    :""

    }

    </div>

  )

}
export default OfferMessage;