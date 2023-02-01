import React,{useRef} from "react";
import {REGULAR_EXPRESSIONS , DEFAULT_MESSAGES} from "../common/constants";
import '../scss/CardFormComponent.scss'

const CardFormComponent = ({UpdateCardNumber,
                            UpdateCardName,
                            UpdateExpDateYY, 
                            UpdateExpDateMM,
                            UpdateCvc,
                            UpdateComplete,
                            cardNumberValidation,
                            clientNameValidation,
                            expDateYYValidation,
                            expDateMMValidation,
                            cvcValidation}) => {
    
    const cardholderName = useRef(null);
    const cardNumber = useRef(null);
    const expDateMM = useRef(null);
    const expDateYY = useRef(null);
    const cvc = useRef(null);
    const dataForm = useRef(null);
   
    const {CARDHOLDERNAME, CARDNUMBER, EXPDATEMM, EXPDATEYY, CVC} = REGULAR_EXPRESSIONS;
    const {errorForm} = DEFAULT_MESSAGES;

    const validText = function(e){

        let inputValue = e.target.name;
        let textValue = e.target.value;
        let value = false;
        e.target.value = textValue.replace(/[0-9]/g, '');

        if(inputValue === "cardholderName"){
            CARDHOLDERNAME.test(e.target.value) ? value = true : value = false;
            UpdateCardName(e.target.value,value);
        }
    }

    const validNumber = function(e){
        let textValue = e.target.value;
        let inputValue = e.target.name;
        let value = false;
        e.target.value = textValue.replace(/[\s\D]/g, '');

        switch (inputValue) {
            case "expDateMM":
                EXPDATEMM.test(e.target.value) ? value = true : value = false;
                UpdateExpDateMM(e.target.value,value);
                break;
            case "expDateYY":
                EXPDATEYY.test(e.target.value) ? value = true : value = false;
                UpdateExpDateYY(e.target.value,value);
                break;
            case "cvc":
                CVC.test(e.target.value) ? value = true : value = false;
                UpdateCvc(e.target.value,value);
                break;
            default:
                break;
        }
    }

    const validCard = function(e){
        let cardValue = e.target.value;
        let value = false;
        
        e.target.value = cardValue 
            .replace(/\s/g, '')
            .replace(/\D/g, '')
            .replace(/([0-9]{4})/g, '$1 ')
            .trim();
        
        CARDNUMBER.test(e.target.value) ? value = true : value = false;
        UpdateCardNumber(e.target.value,value);
    };

    const handleSubmit = function(event){
        event.preventDefault();
        
        if(cardNumberValidation && clientNameValidation && expDateYYValidation && expDateMMValidation && cvcValidation){
            UpdateComplete(true);
        }else{
            alert('Bad');
        }
    }

    return (
        <div className="panel-formulario cardForm">
            <form ref={dataForm} onSubmit={handleSubmit} >
                <span>cardholder name</span><br/>
                <input type="text" name="cardholderName" ref={cardholderName} 
                    placeholder="e.g. Jane Appleseed" 
                    onKeyUp={validText}
                    maxLength="25"
                    minLength="10"/>
                {!clientNameValidation && <span className="presentation-error">{errorForm}</span>}
                <span>card number</span><br/>
                <input type="text" name="cardNumber" ref={cardNumber}
                    placeholder="e.g. 1234 5678 9123 0000" 
                    maxLength="19"
                    onKeyUp={validCard}/>
                {!cardNumberValidation && <span className="presentation-error">{errorForm}</span>}
                <div>
                    <div>
                        <div>
                            <span>exp.date(mm/yy)</span>
                            <input type="text" name="expDateMM" ref={expDateMM} 
                                placeholder="MM" onKeyUp={validNumber}
                                maxLength="2" pattern="^0{1}[1-9]|^1+[0-2]"/><br/>
                        </div>
                        <div>
                            <input type="text" name="expDateYY" ref={expDateYY} 
                                placeholder="YY" onKeyUp={validNumber} 
                                maxLength="2"/><br/>
                        </div>

                        {(!expDateYYValidation || !expDateMMValidation) && <span className="presentation-error">{errorForm}</span>}
                    </div>
                     
                    <div className="cvcStyle">
                        <span>cvc</span>
                        <input type="text" name="cvc" ref={cvc} placeholder="e.g. 123" 
                            onKeyUp={validNumber} maxLength="3"/>
                            {!cvcValidation && <span className="presentation-error">{errorForm}</span>}
                    </div>
                </div>
                <button className="button-select">Confirm</button>
            </form>
        </div>
    );
} 

export default CardFormComponent;
