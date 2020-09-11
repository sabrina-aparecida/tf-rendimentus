 
import  React from 'react';
import '../style.css'

const Logo = (props) => (
    <div className="logo">
        <img class = "header-logo" src = {require("./banco-safra-logo.png")} alt="logo do Safra"/>
    </div>
);

export default Logo;