"use strict";

var validation = validation || {};

validation.Form = function(){
    var form = document.getElementById("form");
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var pnr = document.getElementById("pnr");
    var email = document.getElementById("email");
    var price = document.getElementById("price");
    
    //Ej tal
    var regExpName = /^\D+$/;
    
    //5 Siffror i posnummerform
    var regExpPnr = /(SE)? ?[1-9]{1}\d{2}\-? ?\d{2}$/;
    var regExpPnrRepPat = /^SE| |\-|$/;
    
    //Email-form
    var regExpEmail = /^(?!\.)(w|-|\.|#){1,64}(?!\.)@(?!\.)[-.a-zåäö0-9]{4,253}/;
    
    //Ett valt alternativ
    var regExpPrice = "price.value('low').checked = true || price.value('middle').checked = true ||price.value('high').checked = true";
    
    valid();
    
    function valid(){
        
        fname.onfocus = function(){
        this.select();
        }
        
        
        pnr.onfocus = function(){
             
                //if(regExpPnr.test(this.value)){
                    alert("Rätt!");
                //}
        };   
        
    };
};
window.onload = function () {
   validation.Form;
};  