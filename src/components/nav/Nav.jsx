import React, { useState } from 'react';
import Image from '../image/image';
import logo from '../../assets/logo.png';
import menu from '../../assets/menuhamburger.png';
import { Link } from 'react-router-dom';
import './nav.css'


const Nav = () => {
  const [open, setOpen] = useState(false);
  const menuOpen = () => {
    setOpen(!open);
  };
  return (
    <nav className="menu-burger">
      <div className="listener">
        <button type="submit" onClick={menuOpen} className="btn-pages">
          <Image src={menu} alt="menu" class="menu-hamburger" />
        </button>
        {open && (
          <div>
            <Link to="/listBank">
              <button type="submit" className="pages">Home</button>
            </Link>
            <Link to="/offers">
              <button type="submit" className="pages">Créditos</button>
            </Link>
            <Link to="/offers">
              <button type="submit" className="pages">Contratos</button>
            </Link>
            <Link to="/login">
              <button type="submit" className="pages">Sair</button>
            </Link>
          </div>
        )}
        </div>
        <div className="listener2">
          <Image src={logo} alt="logo-nav" class="logo-nav" />
        </div>
    </nav>
  );
};

export default Nav

