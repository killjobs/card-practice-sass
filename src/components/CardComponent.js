import React from "react";
import '../scss/CardComponent.scss'

const CardComponent = ({cardNumber, clientName, dateYY, dateMM}) =>
    <div className="cardFront dimension--tarjeta">
        <div>
            
        </div>
        <div>
            <span>{cardNumber}</span>
            <div>
                <span>{clientName}</span><span>{dateMM}/{dateYY}</span>
            </div>
        </div>
    </div>;

export default CardComponent;