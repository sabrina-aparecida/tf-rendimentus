import React from 'react';
import Logo from './logo/logo.jsx'
import './style.css'
import {  Link } from "react-router-dom";




function Login(){
    return (
        <div className="login_background">
        <Logo className ="header-logo" />
        <h1 className = "app_name">Rendimentus</h1>
        <p className = "lead">Todas as suas contas em um só lugar</p>
        <main>
            <form  className="login">
                <input type='text' name = 'email' placeholder ='Email' className = 'email-input'/>
                <input type='password' name = 'senha' placeholder ='Senha' className = 'senha-input'/>
            <Link to="/listBank">
                <button  type = 'submit' className = 'input-submit'>ENTRAR</button>
            </Link>
            
           </form>
        </main>
    </div>
    )
}
export default Login;