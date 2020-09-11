import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { numberFormat } from "../../Util/util";

import Usuario from '../../assets/usuario.png';
import Image from '../image/image';
import './style.css'


const Header = () => {
  const [profile, setProfile] = useState([]);
  const [extract, setExtract] = useState();
  let { id } = useParams();

  useEffect(() => {
    fetch('https://jsonbox.io/box_ddb0ab5da8d69da8c315/client')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProfile(data);

      })
      .catch((e) => {
        console.log(e)
        alert("ocorreu um erro ao tentar obter os dados");
      });
  }, []);

  useEffect(() => {
    fetch(`https://jsonbox.io/box_ddb0ab5da8d69da8c315/banks/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const value = data.accounts[0].accountExtract.reduce((prev, next) => prev + next.value, 0);
        data.valueExtract = numberFormat.format(value);
        setExtract(data);
      })
      .catch((e) => {
        alert("ocorreu um erro ao tentar obter os dados");
      });
  }, [id]);

  return (
    <div className="container-inner">
        <Image src={Usuario} alt="profile" class="profile-user" />

      {profile.map((item, index) => (
        <div className="header-profile" key={index}>
          <span className="bold">
          {`Olá, ${item.name}`}
          </span>
          <span>
          {item.cpf}
          </span>
          <span className="ola">Agencia: {extract.accounts[0].accountNumber}  Conta:{extract.accounts[0].agency}</span>
        </div>
      )
      )}
    </div>
  )
}
export default Header