"use strict";

var mezz = {

    messages: [],

    init: function (e) {
        var mess = new Message(e, new Date());
        messages.push(mess.text); 
        alert(messages[0].getText());
        //alert(mess.getText());
        //mess.setText("En annan test");
        //alert(mess);
    }
};

window.onload = init("Testmeddelande");  



//    var mess = new Message("Testmeddelande", new Date());
//    alert(mess);
//    alert(mess.getText());
//    mess.setText("En annan test");
//    alert(mess);


//window.onload = init();  
//messages.push(message.text);


//var p = document.querySelector("#value"); 
//var input = document.querySelector("#string");
//var submit = document.querySelector("#send");