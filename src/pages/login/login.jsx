import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import Logo from './logo/logo.jsx'
import './style.css'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        fetch("https://jsonbox.io/box_ddb0ab5da8d69da8c315/client")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const user = data.find(item => item.email === email);
                console.log(user, data)
                if (user && password === "123456")
                    history.push("/listBank");
                else toast.error("E-mail ou Senha Inválidos")
            })
            .catch((e) => {
                alert("ocorreu um erro ao tentar obter os dados");
            });
    }

    return (
        <div className="login_background">
            <Logo className="header-logo" />
            <h1 className="app_name">Rendimentus</h1>
            <p className="lead">Todas as suas contas em um só lugar</p>
            <main>
                <form className="login">
                    <input type='text' name='email' placeholder='Email' className='email-input' onChange={(e) => setEmail(e.target.value)} />
                    <input type='password' name='senha' placeholder='Senha' className='senha-input' onChange={(e) => setPassword(e.target.value)} />
                    <div>
                        <button type='button' className='input-submit' onClick={handleLogin}>ENTRAR</button>
                    </div>

                </form>
            </main>
        </div>
    )
}
export default Login;