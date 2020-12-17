import React from "react";


function Header() {

    return <header>

        <div className="nav1">
            

            <nav className="navbar navbar-expand-lg navbar-light bg-dark  ">
            <img className="himg" src="./img/adv.png" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav justify-content-center" >
                        <li class="nav-item active">
                        <button className="btn btn-dark " href="#">HOME</button>
                        </li>
                        <li class="nav-item">
                        <button className="btn btn-dark " href="#">ABOUT US</button>
                        </li>
                        <li class="nav-item">
                        <button className="btn btn-dark" href="#">CONTACT US</button>
                        </li>
                        <li class="nav-item">
                        <button className="btn btn-dark " href="#">FAQ </button>
                        </li>


                       
                    </ul>
                </div>
            </nav>


        </div>

    </header>

}

export default Header;