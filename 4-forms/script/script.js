"use strict";

var validation = validation || {};

validation.Form = function(){
    var formOne = document.forms[0];
    //var names = document.getElementByClassName["name"];
    var pNr = document.getElementById("pnr");
    //var eMails = document.getElementByClassName("email");
    var price = document.getElementById("price");
    
    //Ej tal
    var regExpName = /^\D+$/;
    
    //5 Siffror i posnummerform
    var regExpPnr = /(SE)? ?[1-9]{1}\d{2}\-? ?\d{2}$/;
    var regExpPnrRepPat = /^(SE)|( )|(\-)|/g;
    
    //Email-form
    var regExpEmail = /^(?!\.)(w|-|\.|#){1,64}(?!\.)@(?!\.)[-.a-zåäö0-9]{4,253}/;
    
    //Ett valt alternativ
    var regExpPrice = "price.value('low').checked = true || price.value('middle').checked = true ||price.value('high').checked = true";
    
    //Felmeddelanden
    var blank = "Detta fält får inte lämnas blankt";
    var noChoice = "Du måste välja ett alternativ";
    var notName = "Nmnet får inte innehålla några siffror";
    var notPnr = "Postnumret är felaktigt";
    var notEmail = "Eposten är felaktig";
    
    /*formOne.elements[0].focus();
    for(var i = 0; i < formOne.Lenght; i++){
        formOne[1].onfocus = function(){
        this.select();
        };
    }*/
    
    pNr.onblur = function(e){
        var input = this.value;
        if(regExpPnr.test(input)){
            input = input.replace(regExpPnrRepPat, "");
            this.value = input;
            this.setAttribute("class", "ok");
        }
        else{
            this.setAttribute("class", "notValid");
            if(input === undefined){
                setMessage(e, blank);
            }
            else{
                setMessage(pNr, notPnr);
            }
        }
    };
    
    //Infogar felmeddelande
    function setMessage(node, text){
        var error = document.createTextNode(text);
        node.appendChild(error);
    }   
        
    
    
        
        
        
        
       // pnr.onfocus = function(){
             
                //if(regExpPnr.test(this.value)){
                    //alert("Rätt!");
                //}
        //};   
        
    
    

    
    
    
};

window.onload = function () {
   validation.Form();
};  