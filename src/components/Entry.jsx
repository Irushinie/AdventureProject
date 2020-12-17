import React from "react";

function Entry(props) {

    return (
        <div className="term">
            <dt>
                <a href="https://www.w3schools.com">
                <img className="imgss" src={props.imgs}/>
                </a>
                
                <span>{props.name}</span>
            </dt>
            <dd>
                {props.description}
            </dd>
            
        </div>

    );



}

export default Entry;