import React from "react";
import Register from "./Register";



var userIsRegistered = false;


function RegApp() {

    
    return (

       <div className="container">
           <Register 
               isRegistered={userIsRegistered}
           />
       </div>
    );
}

export default RegApp;
