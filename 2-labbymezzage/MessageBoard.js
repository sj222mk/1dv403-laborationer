"use strict";
var messageSystem = messageSystem || {};

messageSystem.MessageBoard = {

    messages : [],
     
    renderMessages: function(){
        //Remove all messages
        document.getElementById("board").innerHTML = "";
        var textArea = document.getElementById("text");
        textArea.value = "";
        textArea.focus();
        

        //Renders all messages
        if(this.messages !== undefined){
            for(var i=0; i < messageSystem.MessageBoard.messages.length; ++i){
                messageSystem.renderMessage(i);
            }
        }
    }
};
    messageSystem.init = function(){
        
        
        document.getElementById("submitButton").onclick = function(){
        var mess = document.getElementById("text").value;
        if(mess !== undefined){
            messageSystem.addMessage(mess);
            messageSystem.messageCount();
            }
        }; 
        messageSystem.messageCount();
    };
    
    messageSystem.addMessage = function (text) {
        var newMessage = new messageSystem.Message(text, new Date() );
        messageSystem.MessageBoard.messages.push(newMessage);
        messageSystem.MessageBoard.renderMessages();
        };
    
    messageSystem.messageCount = function(){
        var count = document.createElement("p");
        var number = messageSystem.MessageBoard.messages.length;
        count.innerHTML = "Antal meddelanden: " + number;
        
        var messageBoard = document.getElementById("board");
        messageBoard.appendChild(count);
    };
    
    messageSystem.renderMessage = function(messageID) {
        var div = document.createElement("div");
        div.classname = "board";
        
        var text = document.createElement("p");
        text.innerHTML = messageSystem.MessageBoard.messages[messageID].getHTMLText();
        div.appendChild(text);
        
        var time = document.createElement("p");
        time.innerHTML = messageSystem.MessageBoard.messages[messageID].getDate();
        div.appendChild(time);
        
        var board = document.getElementById("board");
        board.appendChild(div);
    };
    
window.onload = function () {
   messageSystem.init();
};





