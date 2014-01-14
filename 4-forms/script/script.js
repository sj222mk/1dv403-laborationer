"use strict";

var validation = validation || {};

validation.Form = function(){
    var form = document.getElementById("form");
    //Alla fält i formuläret
    var formOne = document.getElementsByClassName("test");
    var subButton = document.getElementById("submitButton");
    var shadow = document.getElementById("overlay");
    var pop = document.getElementById("pop");
    
    var formLength = formOne.length;
    
    //Ej tal
    var regExpName = /^\D+$/;
    
    //5 Siffror i posnummerform
    var regExpPnr = /(SE)? ?[1-9]{1}\d{2}\-? ?\d{2}$/;
    var regExpPnrRepPat = /^(SE)|( )|(\-)|/g;
    
    //Email-form
    var regExpEmail = /^(?!\.)(\w|-|\.|#){1,64}(?!\.)@(?!\.)[-.a-zåäö0-9]{4,253}/;
    
    //Felmeddelanden
    var blank = "Detta fält får inte lämnas tomt";
    var noChoice = "Du måste välja ett alternativ";
    var notName = "Namnet får inte innehålla några siffror";
    var notPnr = "Postnumret är felaktigt";
    var notEmail = "Eposten är felaktig";
    
    formOne[0].focus();
//Select funkar ej???
    
    pop.setAttribute("valid", "false");
    shadow.setAttribute("visible", "false");
    
    subButton.type = "button";
    subButton.disabled = true;
    
    checkAll();
    
    function checkAll(){
        for(var i = 0; i < formLength; i++){
            formOne[i].onchange = function(){
                checkOne(this);
                checkIfReady();
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
            node.setAttribute("valid", "true");
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
            node.setAttribute("valid", "true");
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
        
        if(node.getAttribute("valid") === "false"){
            var oldT = document.getElementById("errorTag");
            oldT.parentNode.replaceChild(newT, oldT);
            }
        else{
            node.setAttribute("valid", "false");
            node.parentNode.appendChild(newT);
            }
        node.focus();
        }   
    
    //Tar bort felmeddelande
    function removeErrorMessage(node){
        var removeT = node.parentNode.lastChild;
        if(removeT.id === "errorTag"){
            node.parentNode.removeChild(removeT);
            }
        }
    
    function checkIfReady(){
        var count = 0;
        for(var i = 0; i < formLength; i++){
            if(formOne[i].getAttribute("valid") === "true"){
                count +=1;
                }
            }
        if(count === formLength){
                subButton.disabled = false;
                subButton.onclick = lastCheck;
                }
        else{
            subButton.disabled = true;
            }
        }
       
    //2:a validering när allt e klart    
    function lastCheck(){
        var count = 0;
        for(var i = 0; i < formLength; i++){
            var answer = formOne[i];
            checkOne(answer);
            if(formOne[i].getAttribute("valid") === "false"){
                subButton.disabled = true;
                
                }
            else{
                      count +=1;  
                }
            }
            if(count === formLength){
                popUp();
            }
        }
    
    //Visa pop-upp-ruta
    function popUp(){
        shadow.setAttribute("visible", "true");
//inaktivera alla fält och knappar i bakgrund
        pop.setAttribute("valid", "true");
        createPopUp();
        }
    
    //Tar bort pop-upp-ruta
    function popDown(){
        deletePopUp();
        pop.setAttribute("valid", "false");
        shadow.setAttribute("visible", "false");
//inaktivera alla fält och knappar i bakgrund
    }
    
    //HTML i pop-upp-ruta
    function createPopUp(){
        var pContainer = document.createElement("div");
        pContainer.id = "pcontainer";
        var pHeader = document.createElement("div");
        pHeader.id = "pheader";
        var pContent = document.createElement("div");
        pContent.id = "pcontent";
        var pFooter = document.createElement("div");
        pFooter.id = "pfooter";
        var h2 = document.createElement("h2");
        
        h2.appendChild(document.createTextNode("Vänligen bekräfta ditt köp!"));
        pHeader.appendChild(h2);
        
        var outPutLabel = document.createElement("div");
        outPutLabel.id = "plabel";
        pContent.appendChild(createPopLabel(outPutLabel));
        
        var outPutText = document.createElement("div");
        outPutText.id = "ptext";
        pContent.appendChild(createPopText(outPutText));
        
        pContainer.appendChild(pHeader);
        pContainer.appendChild(pContent);
        pContainer.appendChild(createButtons(pFooter));
        pop.appendChild(pContainer);
    }
    
    //Labels i pop-up-ruta
    function createPopText(output){
        for(var i = 0; i < formLength; i++){
            var field = formOne[i];
            var p = document.createElement("p");
            p.appendChild(document.createTextNode(field.value));
            output.appendChild(p);
            }
        return output;
        }
        
    //Text i pop-up-ruta
    function createPopLabel(output){
        for(var i = 0; i < formLength; i++){
            var field = formOne[i];
            var p = document.createElement("p");
            p.appendChild(document.createTextNode(field.parentNode.firstChild.textContent));
            output.appendChild(p);
            }
        return output;
        }
        
    function createButtons(node){
        var popCancelButton = document.createElement("button");
        popCancelButton.id = "popcancelbutton";
        popCancelButton.appendChild(document.createTextNode("Ändra uppgifter"));
        node.appendChild(popCancelButton);
        popCancelButton.onclick = function(){
            popDown();
        };
        
        var popSubButton = document.createElement("button");
        popSubButton.id = "popsubbutton";
        popSubButton.type = "submit";
        popSubButton.appendChild(document.createTextNode("Bekräfta ditt köp!"));
        node.appendChild(popSubButton);
        popSubButton.onclick = function(){
            finalSubmit();    
        };
        return node;
    }
    
    function deletePopUp(){
        var pContainer = document.getElementById("pcontainer");
        pop.removeChild(pContainer);
    }
    
    function finalSubmit(){
        popDown();
        subButton.disabled = true;
        form.submit();
        //alert("Formuläret skickades!");
        //window.location=window.location;
    }
};

window.onload = function () {
   validation.Form();
};  