import React, {useState} from 'react';
import './scss/App.scss';
import CardComponent from './components/CardComponent';
import CardFormComponent from './components/CardFormComponent';
import BackCardComponent from './components/BackCardComponent';
import CompleteComponent from './components/CompleteComponent';
import { DEFAULT_VALUES } from './common/constants';

function App() {
  const {dafaultCardNumber, defaultCardName, defaultDateYY, defaultDateMM, defaultCvc, defaulValue} = DEFAULT_VALUES;

  const [cardNumberValue, setCardNumberValue] = useState({cardNumber:dafaultCardNumber, valido:defaulValue});
  const [clientNameValue, setClientNameValue] = useState({clientName:defaultCardName, valido:defaulValue});
  const [expDateYYValue, setExpDateYYValue] = useState({dateYY:defaultDateYY, valido:defaulValue});
  const [expDateMMValue,setExpDateMMValue] = useState({dateMM:defaultDateMM, valido:defaulValue});
  const [cvcValue,setCvcValue] = useState({cvc:defaultCvc, valido:defaulValue});
  const [complete,setComplete] = useState({value:false});

  const UpdateClientNameValue = (_field,_expression) =>{
    _field.length === 0 ? setClientNameValue({clientName:DEFAULT_VALUES.defaultCardName, valido:defaulValue}) : setClientNameValue({clientName:_field,valido:_expression});
  }

  const UpdateCardNumberValue = (_field,_expression) =>{
    _field.length === 0 ? setCardNumberValue({cardNumber:DEFAULT_VALUES.dafaultCardNumber, valido:defaulValue}) : setCardNumberValue({cardNumber:_field,valido:_expression});
  }

  const UpdateExpDateYYValue = (_field,_expression) =>{
    _field.length === 0 ? setExpDateYYValue({dateYY:DEFAULT_VALUES.defaultDateYY, valido:defaulValue}) : setExpDateYYValue({dateYY:_field,valido:_expression});
  }

  const UpdateExpDateMMValue = (_field,_expression) =>{
    _field.length === 0 ? setExpDateMMValue({dateMM:DEFAULT_VALUES.defaultDateMM, valido:defaulValue}) : setExpDateMMValue({dateMM:_field,valido:_expression});
  }

  const UpdateCvcValue = (_field,_expression) =>{
    _field.length === 0 ? setCvcValue({cvc:DEFAULT_VALUES.defaultCvc, valido:defaulValue}) : setCvcValue({cvc:_field,valido:_expression});
  }

  const UpdateComplete = (_value) => {
    UpdateClientNameValue("",false);
    UpdateCardNumberValue("",false);
    UpdateExpDateYYValue("",false);
    UpdateExpDateMMValue("",false);
    UpdateCvcValue("",false);
    setComplete({value:_value});
  }

  return (
    <div className="App">
      <div className='App__image'>&nbsp;AAAAA</div>
      <div className='App__form'>
        <CardComponent 
          cardNumber = {cardNumberValue.cardNumber}
          clientName = {clientNameValue.clientName}
          dateYY = {expDateYYValue.dateYY}
          dateMM = {expDateMMValue.dateMM}/>
        <BackCardComponent
          cvc = {cvcValue.cvc}/>
        {complete.value && <CompleteComponent
        UpdateComplete = {UpdateComplete}/>}
        {!complete.value && <CardFormComponent 
          UpdateCardNumber = {UpdateCardNumberValue} 
          UpdateCardName = {UpdateClientNameValue}
          UpdateExpDateYY = {UpdateExpDateYYValue}
          UpdateExpDateMM = {UpdateExpDateMMValue} 
          UpdateCvc = {UpdateCvcValue}
          UpdateComplete = {UpdateComplete}
          cardNumberValidation = {cardNumberValue.valido} 
          clientNameValidation = {clientNameValue.valido}
          expDateYYValidation = {expDateYYValue.valido}
          expDateMMValidation = {expDateMMValue.valido} 
          cvcValidation = {cvcValue.valido}/>}
      </div>              
    </div>
  );
}

export default App;
