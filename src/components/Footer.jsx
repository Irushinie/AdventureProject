import React from "react";

function Footer() {

    return (
        <div className="ftr">
            <div class="row">
                <div class="col">
                    <img className="fimg" src="./img/adv.png"></img>
                </div>

                <div class="col">
                    <h3 className="fabt">About Us</h3>
                    <p className="fp">Back in 2004, Sam, Tom and Melissa co-founded Experience Travel Group, driven by a shared passion for
                    authentic luxury travel.
                Today Experience Travel Group is a formidable company focused on helping people discover and enjoy Asia. </p>
                </div>

                <div class="col">
                    <h3 className="fabt">Contact Us</h3>
                    <p className="fp"> Adventure Travel Group,<br></br>
                    No 2,<br></br>
                     Natures' Breeze, <br></br>
                     Negambo Road,<br></br>
                     Kurunegala
                    </p>
                </div>


                <div class="col">
                    <h3 className="fabt">Get Social</h3>

                    <p className="fp">Visit us on Facebook <br></br>
                    Visit our Adventure Blog <br></br>
                Follow our Instagram Page</p>


                </div>


            </div>
            <div class="footer-copyright text-center py-3">© 2020 Copyright:
                     <a href="" className="fcopyr">TheAdventureGroup.com</a>
            </div>
        </div>

    )
}

export default Footer;