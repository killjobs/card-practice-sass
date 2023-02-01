export const DEFAULT_MESSAGES = {
    errorForm : "Formato incorrecto"
}

export const DEFAULT_VALUES = {
    dafaultCardNumber : "0000 0000 0000 0000",
    defaultCardName : "jaime applessed",
    defaultDateYY : "YY",
    defaultDateMM : "MM",
    defaultCvc : "000",
    defaulValue : false
};

export const REGULAR_EXPRESSIONS = {
    CARDHOLDERNAME : /^[\s\D]{10,25}/,
    CARDNUMBER : /^[0-9\s]{19,19}/,
    EXPDATEMM : /^0{1}[1-9]|^1+[0-2]/,
    EXPDATEYY : /^[0-9]{2,2}/,
    CVC : /^[0-9]{3,3}/
};