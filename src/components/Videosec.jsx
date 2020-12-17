import React from "react";


function Videosec() {

    return (

        <div className="vidsec">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div className="vid" >
                            <video src="../img/vid2.mp4" autoPlay loop muted />
                        </div>
                    </div>
                    <div class="col">
                    <h1 className="vh1">FRESH HOLIDAYS FOR CURIOUS TRAVELLERS</h1>
                    <p className="vp">Seeking out a new journey, but don't know where to start? We're passionate about finding
                     new ways to share the magic of Asia with like-minded explorers So, our specialists have
                      edited together a selection of holiday ideas based on our recent discoveries and trends.
                    it's an innovative take on an old favourite or something completely new, this is your 
                    fast track to a fresh adventure.</p>
                  </div>
                </div>
            </div>
        </div>

    );
}

export default Videosec;