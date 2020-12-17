import React, { useState } from "react";


function Register(props) {

    const [isMousedOver, setMouseOver] = useState(false)
    

    function regb() {
        alert("Great! You've successfully registered.");
    }
    function handleMouseOver(){
        setMouseOver(true)
    }
    function handleMouseOut(){
        setMouseOver(false)
    }
    
    return (
        <form className="form">
            <img className="loginimg" src="./img/adv.png" />
            <br></br>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            {props.isRegistered === false ? (
                <input type="password" placeholder="Confirm Password" />
            ) : null}
            <button type="submit" style={{ backgroundColor: isMousedOver ? "green" : " rgb(7, 4, 24)"}}
             onClick={regb}
             onMouseOver={handleMouseOver}
             onMouseOut={handleMouseOut}
              >{props.isRegistered ? "Login" : "Register"}
              </button>
        </form>

    );
}

export default Register;