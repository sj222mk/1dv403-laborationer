"use strict";

var MessageBoard = {

    messages: [],

    document.getElementById("submitButton").onclick = function(){
    mess = doc.getElementById("textarea").value;
    if(mess !== undefined){
        addMessage(mess);
        };
    } 
    var addMessage = function (text) {
        var newMessage = new Message(text, new Date());
        newMessage.push();
        }
   
};
window.onload = function () {
    new MessageBoard("board");
};





