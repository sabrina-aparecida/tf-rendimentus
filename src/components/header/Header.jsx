import React, { useState, useEffect } from 'react';
import Usuario from '../../assets/usuario.png';
import Image from '../../components/image/image';


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
        alert("ocorreu um erro ao tentar obter os dados");
      });
  }, [profile]);

  return (
    <div className="container-inner">
      <div className="profile-photo">
      <Image src={Usuario} alt="profile" className="profile-user" />
      </div>
      {profile.map(item => (
        <div className="header-profile">
          <span>
            Cliente:
          {item.name}
          </span>
          <span>
            CPF/CPNJ:
          {item.cpf}
          </span>
        </div>
      )
      )};
    </div>
  )
}
export default Header