import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Nav from '../../components/nav/Nav';
import Header from '../../components/header/Header'
import Button from '../../components/button/Button'

function MenuBank() {
	const [sac, setSac] = useState([])
	const history = useHistory();

	useEffect(() => {
		fetch('https://jsonbox.io/box_ddb0ab5da8d69da8c315/banks')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setSac(data);
			})
			.catch((e) => {
				alert("ocorreu um erro ao tentar obter os dados");
			});
	}, []);

	function handleMenuBank() {
    history.push(`/login/`);
  }

	return (
		<>
			<div className="nav">
				<header className="hal">
					<Nav link='/listBank'></Nav>
				</header>
			</div>
			<Header />
			<section>
				<div>
					<Button
						name="EXTRATO"
						item="Por período"
						className="submit"
						onClick={handleMenuBank}
					/>
				</div>
				<div>
					<Button
						name="CRÉDITOS"
						item="Contratos"
						className="submit"
						onClick={handleMenuBank}
					/>
				</div>
				<div>
					<Button
						name="CARTÕES"
						item="Fatura"
						className="submit"
						onClick={handleMenuBank}
					/>
				</div>
				<div>
					<Button
						name="CONTRATAÇÕES"
						item="Consultar"
						className="submit"
						onClick={handleMenuBank}
					/>
				</div>
				<div>
					<Button
						name="OUTROS CARTÕES"
						item="Bandeiras"
						className="submit"
						onClick={handleMenuBank}
					/>
				</div>
			</section>
			<footer>
				<span> CANAIS DE ATENDIMENTO:</span>
				{sac.map(item => (
					<span>
						{item.callCenter}
{/* 						<div>
							{item.accounts[0].credito}
						
						</div> */}
					</span>
				))}
			</footer>
		</>
	)
}
export default MenuBank; 
