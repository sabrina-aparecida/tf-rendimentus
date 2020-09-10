import React, { useState, useEffect } from 'react';
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header'
import './style.css'

function MenuBank() {

	return (
		<>
		<div className="nav">
			<header className="hal">
				<Nav link='/listBank'></Nav>
			</header>
		</div>
		<Header />
		<input type="search" id="typed-text" placeholder="Pesquisar" className="search-text"></input>	
		</>
	)
}
export default MenuBank; 
