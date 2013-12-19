"use strict";
var messageSystem = messageSystem || {};

messageSystem.MessageBoard = {

    messages : [],
     
    renderMessages: function(){
        //Tar bort alla meddelanden
        document.getElementById("board").innerHTML = "";
        var textArea = document.getElementById("text");
        textArea.value = "";
        textArea.focus();
        
        //Skriver ut alla meddelanden
        if(this.messages !== undefined){
            for(var i=0; i < messageSystem.MessageBoard.messages.length; ++i){
                messageSystem.renderMessage(i);
            }
            messageSystem.messageCount();
        }
    }
};

    messageSystem.init = function(){
        
        document.getElementById("submitButton").onclick = function(){
        var mess = document.getElementById("text").value;
        if(mess !== null){
            messageSystem.addMessage(mess);
            }
        }; 
        
        document.getElementById("text").onkeypress = function(e){
            var mess = document.getElementById("text").value;
            if(!e){
                e = window.event;
            }
            if(e.keyCode === 13){
                if(e.shiftKey === false){
                messageSystem.addMessage(mess);
                }
            }
        };
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
    
    messageSystem.messageTime = function(messageID){
        alert(messageSystem.MessageBoard.messages[messageID].toString());
    };
    
    messageSystem.removeMessage = function(messageID){
        var conf = window.confirm("Vill du verkligen radera meddelandet?");
        if(conf === true){
        messageSystem.MessageBoard.messages.splice(messageID, 1);
        messageSystem.MessageBoard.renderMessages();
        }
    };
    
    messageSystem.renderMessage = function(messageID) {
        var div = document.createElement("div");
        div.classname = "board";
        
        //Lägger till delete-knapp i meddelande
        var imgClose = document.createElement("img");
        imgClose.href = "#";
        imgClose.src = "pics/remove24.png";
        imgClose.class = "messageButtons";
        imgClose.alt = "Ta bort-knapp";
        
        imgClose.onclick =  function(){
            messageSystem.removeMessage(messageID);
        };
        div.appendChild(imgClose);
        
        //Lägger till tid-knapp i meddelande
        var imgTime = document.createElement("img");
        imgTime.src = "pics/clock_green24.png";
        imgTime.class = "messageButtons";
        imgTime.alt = "Tid-knapp";
        
        imgTime.onclick =  function(){
            messageSystem.messageTime(messageID);
        };
        div.appendChild(imgTime);
        
        //Lägger till text i meddelande
        var text = document.createElement("p");
        text.innerHTML = messageSystem.MessageBoard.messages[messageID].getHTMLText();
        div.appendChild(text);
        
        //Lägger till tid i meddelande
        var time = document.createElement("p");
        time.innerHTML = messageSystem.MessageBoard.messages[messageID].getDateText();
        div.appendChild(time);
        
        var board = document.getElementById("board");
        board.appendChild(div);
    };
    
window.onload = function () {
   messageSystem.init();
};





