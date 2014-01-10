"use strict";

var validation = validation || {};

validation.Form = function(){
    var formOne = document.getElementsByClassName("test");
    var subButton = document.getElementById("submitButton");
    
    //Ej tal
    var regExpName = /^\D+$/;
    
    //5 Siffror i posnummerform
    var regExpPnr = /(SE)? ?[1-9]{1}\d{2}\-? ?\d{2}$/;
    var regExpPnrRepPat = /^(SE)|( )|(\-)|/g;
    
    //Email-form
    var regExpEmail = /^(?!\.)(\w|-|\.|#){1,64}(?!\.)@(?!\.)[-.a-zåäö0-9]{4,253}/;
    
    //Ett valt alternativ
    //var checkSelect = "price.value('def').checked ===;
    
    //Felmeddelanden
    var blank = "Detta fält får inte lämnas tomt";
    var noChoice = "Du måste välja ett alternativ";
    var notName = "Namnet får inte innehålla några siffror";
    var notPnr = "Postnumret är felaktigt";
    var notEmail = "Eposten är felaktig";
    
    var i;
    
    formOne[0].focus();
    //Select funkar ej!!!
    /*formOne[0].select();
    for(i = 0; i < formOne.length; i++){
        formOne[i].onfocus = function(){
        this.select();
        };
    }*/
    
    subButton.disabled = true;
    checkAll();
    
    
    
    function checkAll(){
        for(i = 0; i < formOne.length; i++){
            formOne[i].onchange = function(){
                checkOne(this);
                checkReady();
                };
            }
        }
    
    function checkOne(inp){
        switch(true){
                case inp.id === "lname" || inp.id === "fname":
                    valid(inp,regExpName, notName);
                    break;
                case inp.id === "pnr":
                    valid(inp,regExpPnr, notPnr);
                    break;
                case inp.id === "email":
                    valid(inp,regExpEmail, notEmail);
                    break;
                case inp.id === "price":
                    validSelect(inp);
                    break;
                default:
                    break;
            }
        }
    
    //Validering med regExp
    function valid(node, reg, mess){
        var input = node.value;
        if(reg.test(input)){
            if(node.id === "pnr"){
                setPnr(node);
                }
            removeErrorMessage(node);
            node.setAttribute("class", "ok");
            }
        else{
            if(input === ""){
                setErrorMessage(node, blank);
                }
            else{
                setErrorMessage(node, mess);
                }
            }
        }
    
    //Validering av listobjekt
    function validSelect(node){
        if(node.value !== "def"){
            removeErrorMessage(node); 
            node.setAttribute("class", "ok");
            }
        else{
            setErrorMessage(node, noChoice);
            }
        } 
    
    //Godkänd validering
    function setPnr(node){
        node.value = node.value.replace(regExpPnrRepPat, "");
        }
    
    //Infogar felmeddelande
    function setErrorMessage(node, text){
        var newT = document.createElement("span");
        newT.setAttribute("id", "errorTag");
        var mess = document.createTextNode(text);
        newT.appendChild(mess);
        
        if(node.className === "notValid"){
            var oldT = document.getElementById("errorTag");
            oldT.parentNode.replaceChild(newT, oldT);
            }
        else{
            node.setAttribute("class", "notValid");
            node.parentNode.appendChild(newT);
            }
        node.focus();
        }   
    
    //Tar bort felmeddelande
    function removeErrorMessage(node){
        var removeT = document.getElementById("errorTag");
        if(removeT !== null){
            removeT.parentNode.removeChild(removeT);
            }
        }
    
    function checkReady(){
        var count = 0;
        for(i = 0; i < formOne.length; i++){
            if(formOne[i].class === "test"){
                count +=1;
                }
            }
        if(count === formOne.length){
                subButton.disabled = false;
            }
        }
        
function checkForm(){
        var error = false;
        for(i = 0; i < formOne.length; i++){
            checkOne(formOne[i]);
            if(formOne[i].class !== "ok"){
                error = true;
                }
            else{
                output(error);        
            }
            return error;
        }
    }
     
    function output(error){
        var fValues = [];
        for(var element in formOne){
            fValues.push(element.label.value + ": " + element.value);
            }
        error.confirm(fValues);
        return error;
        }
};

window.onload = function () {
   validation.Form();
};  