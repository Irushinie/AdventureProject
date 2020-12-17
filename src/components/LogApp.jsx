import React from "react";
import Login from "./Login";
import App from "./App";



var isLoggedIn = false;


function LogApp() {
    return (

        <div className="lgapp">{
            isLoggedIn === true ?
                <App />
                :
                <Login />

        }
        </div>
    );
}

export default LogApp;
