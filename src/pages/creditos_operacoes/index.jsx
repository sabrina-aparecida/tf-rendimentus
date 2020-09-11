import React, { useState, useEffect } from 'react';
import './style.css'

import Nav from '../../components/nav/Nav';

const BankOptions = () => {
    const [myProducts, setMyProducts] = useState([]);

    useEffect(() => {
        fetch('https://jsonbox.io/box_ddb0ab5da8d69da8c315/myProducts')
            .then((response) => {
                return response.json();
            })
            .then((products) => {

                fetch('https://jsonbox.io/box_ddb0ab5da8d69da8c315/offers')
                    .then((response) => {
                        return response.json();
                    })
                    .then((offers) => {
                        for (const product of products) {
                            product.offerContracted = offers.find(c => c.code == product.code)
                        }
                        console.log(products, offers)
                        setMyProducts(products);
                    })
                    .catch((e) => {
                        alert("ocorreu um erro ao tentar obter os dados");
                    });
            })
            .catch((e) => {
                alert("ocorreu um erro ao tentar obter os dados");
            });
    }, []);


    return (
        <>
            <main>
                <div className="nav">
                    <header className="hal">
                        <Nav link='/listBank'></Nav>
                    </header>
                </div>
                <div className="menu-options">
                    {myProducts.map(item => (
                        <div className="opcoes_division">
                            <button className="button_creditos">{item.offerContracted.bank.cod} - {item.offerContracted.bank.name} </button>
                            <div className="options_box">
                                <div className="options">
                                    <span>{item.offerContracted.name}</span>
                                    <span>{item.offerContracted.type}</span>
                                    <span>{item.offerContracted.rate}</span>
                                    <span>{item.offerContracted.value}</span>
                                    <span>{item.offerContracted.maxInstallments}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}
export default BankOptions;         
