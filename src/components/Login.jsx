import React from "react";
import Input from './Input'


function Login() {
    return (
        <form className="form">
            <img className="loginimg" src="./img/adv.png" />
            <br></br>
            <Input type="text" placeholder="Enter username" />
            <Input type="password" placeholder="Enter password" />
            <button type="submit">Login</button>
        </form>

    );
}

export default Login;