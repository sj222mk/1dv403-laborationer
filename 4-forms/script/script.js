"use strict";

var validation = validation || {};

validation.Form = function(){
    var form = document.getElementById("form");
    var name = document.getElementById("name");
    var pnr = document.getElementById("pnr");
    var email = document.getElementById("email");
    var price = document.getElementById("price");
    
    //Ej tal
    var regExpName = //;
    
    //5 Siffror
    var regExpPnr = //;
    
    //Email-form
    var regExpEmail = //;
    
    //Ett valt alternativ
    var regExpPrice = "price.value("low").checked = true || price.value("middle").checked = true ||price.value("high").checked = true;"
    
    var valid = function(){
        
        var first = form.elements[0];
        first.select();
     
     
     
    };   
};

window.onload = function () {
   validation.Form.valid();
};  