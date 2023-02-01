import React from "react";
import "../scss/CompleteComponent.scss";
import logo from "../assets/images/icon-complete.svg";

const CompleteComponent = ({UpdateComplete}) => {

    const reStart = ()=> {
        UpdateComplete();
    }
    return(
        <section className="complete panel-formulario">
            <div>
                <img src={logo} alt="logo-complete"/>    
            </div>
            <div>
                <span>THANK YOU!</span>
                <span>We've added your card details</span>
            </div>
            <button className="button-select" onClick={reStart}>Continue</button>
        </section>
    );
}

export default CompleteComponent;