"use strict";

var mezz = {


};

window.onload = init();  

function init(){
    var mess = new Message("Testmeddelande", new Date());
    alert(mess);
    alert(mess.getText());
    mess.setText("En annan test");
    alert(mess);
}

window.onload = init();  

//var p = document.querySelector("#value"); 
//var input = document.querySelector("#string");
//var submit = document.querySelector("#send");