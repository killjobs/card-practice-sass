import React from "react";
import '../scss/BackCardComponent.scss'

const BackCardComponent = ({cvc}) =>
    <div className="cardBack dimension--tarjeta">
        <div className="lectora"></div>
        <div className="cvc-container">
            <span>{cvc}</span>
        </div>
        <div className="linea-adicional">
            ______ __ __ _<br/>
              __ ____ __ _<br/>
            _ __ _ _______<br/>
        </div>
    </div>;

export default BackCardComponent;