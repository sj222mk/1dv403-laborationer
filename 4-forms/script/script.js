"use strict";

var validation = validation || {};

validation.Form = function(){
    var formOne = document.getElementsByClassName("test");
    
    //Ej tal
    var regExpName = /^\D+$/;
    
    //5 Siffror i posnummerform
    var regExpPnr = /(SE)? ?[1-9]{1}\d{2}\-? ?\d{2}$/;
    var regExpPnrRepPat = /^(SE)|( )|(\-)|/g;
    
    //Email-form
    var regExpEmail = /^(?!\.)(\w|-|\.|#){1,64}(?!\.)@(?!\.)[-.a-zåäö0-9]{4,253}/;
    
    //Ett valt alternativ
    var checkSelect = "price.value('def').checked = true";
    
    //Felmeddelanden
    var blank = "Detta fält får inte lämnas tomt";
    var noChoice = "Du måste välja ett alternativ";
    var notName = "Namnet får inte innehålla några siffror";
    var notPnr = "Postnumret är felaktigt";
    var notEmail = "Eposten är felaktig";
    
    var i;
    
    formOne[0].focus();
    //Select funkar ej!!!
    formOne[0].select();
    for(i = 0; i < formOne.length; i++){
        formOne[i].onfocus = function(){
        this.input.select();
        };
    }
    
    for(i = 0; i < formOne.length; i++){
        formOne[i].onblur = function(){
            //alert(this.id);
            switch(true){
                case this.id === "lname" || this.id === "fname":
                    valid(this,regExpName, notName);
                    break;
                case this.id === "pnr":
                    valid(this,regExpPnr, notPnr);
                    break;
                case this.id === "email":
                    valid(this,regExpEmail, notEmail);
                    break;
                case this.id === "price":
                    validSelect(this);
                    break;
                default:
                    break;
            }
        };
    }
    
    //Validering med regExp
    function valid(node, reg, mess){
        var input = node.value;
        if(reg.test(input)){
            if(node.id === "pnr"){
                setPnr(node);
            }
            removeErrorMessage(node);
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
        if(checkSelect){
            removeErrorMessage(node);   
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
        else
        {
            node.setAttribute("class", "notValid");
            node.parentNode.appendChild(newT);
        }
        node.focus();
    }   
    
    //Tar bort felmeddelande
    function removeErrorMessage(node){
        var removeT = document.getElementById("errorTag");
        if(removeT.parentNode){
            removeT.parentNode.removeChild(removeT);
        }
        node.setAttribute("class", "ok");
    }
    
    
    
    
    
};

window.onload = function () {
   validation.Form();
};  