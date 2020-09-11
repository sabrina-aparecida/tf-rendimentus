import React, { useState, useEffect } from 'react';
import Usuario from '../../assets/usuario.png';
import Image from '../image/image';
import './style.css'


const Header = () => {
  const [profile, setProfile] = useState([])

  useEffect(() => {
    fetch('https://jsonbox.io/box_ddb0ab5da8d69da8c315/client')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setProfile(data);

      })
      .catch((e) => {
        console.log(e)
        alert("ocorreu um erro ao tentar obter os dados");
      });
  }, []);

  return (
    <div className="container-inner">
      <div className="profile-photo">
        <Image src={Usuario} alt="profile" class="profile-user" />
      </div>
      {profile.map((item, index) => (
        <div className="header-profile" key={index}>
          <span className="bold">
            Olá,
          {item.name}
          </span>
          <span>
          {item.cpf}
          </span>
        </div>
      )
      )}
    </div>
  )
}
export default Header