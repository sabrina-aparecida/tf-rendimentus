import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";

import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header'
import Button from '../../components/button/Button'
import extrato from '../../assets/extrato.png'
import cartoes from '../../assets/cartao-de-pagamento.png'
import dinheiro from '../../assets/dinheiro.png'

function MenuBank() {
  const history = useHistory();
  const { id } = useParams();
  const [sac, setSac] = useState();

  useEffect(() => {
    fetch(`https://jsonbox.io/box_ddb0ab5da8d69da8c315/banks/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSac(data);
      })
      .catch((e) => {
        alert("ocorreu um erro ao tentar obter os dados");
      });
  }, [id]);

  function handleMenuBank() {
    history.push(`/extract/${id}`);
  }

  if (!sac) {
    return null;
  }
  return (
    <>
      <div className="nav">
        <header className="hal">
          <Nav link='/listBank'></Nav>
        </header>
      </div>
      <Header />
      <span>Agencia: {sac.accounts[0].accountNumber}  Conta:{sac.accounts[0].agency}  </span>
      <section>
        <div>
          <Button
            icon={extrato}
            name="CRÉDITOS"
            item="Contratos"
            className="submit"
            onClick={handleMenuBank}
          />
        </div>
        <div>
          <Button
            icon={cartoes}
            name="CARTÕES"
            item="Fatura"
            className="submit"
            onClick={handleMenuBank}
          />
        </div>
        <div>
          <Button
            icon={dinheiro}
            name="CONTRATAÇÕES"
            item="Consultar"
            className="submit"
            onClick={handleMenuBank}
          />
        </div>
        <div>
          <Button
            icon={cartoes}
            name="OUTROS CARTÕES"
            item="Bandeiras"
            className="submit"
            onClick={handleMenuBank}
          />
        </div>
      </section>
      <footer>
        <span> CANAIS DE ATENDIMENTO:</span>
        <span>Contato do Gerente:</span>
        <span>{sac.callCenter}</span>
        <span>{sac.accounts[0].accountManager.name}</span>
        <span>{sac.accounts[0].accountManager.email}</span>
        <span>{sac.accounts[0].accountManager.telefone}</span>
      </footer>
    </>
  )
}
export default MenuBank; 
