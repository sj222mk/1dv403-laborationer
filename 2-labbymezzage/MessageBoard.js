"use strict";

var MessageBoard = {

    messages: [],

    renderMessages: function(){
        //Remove all messages
        document.getElementById("board").innerHTML = "";

        //Renders all messages
        if(this.messages !== undefined){
            for(var i=0; i < MessageBoard.messages.length; ++i){
                MessageBoard.renderMessage(i);
            }
        }
        document.getElementById("submitButton").onclick = function(){
        mess = doc.getElementById("textarea").value;
        if(mess !== undefined){
            addMessage(mess);
            };
        } 
    }

    var addMessage = function (text) {
        var newMessage = new Message(text, new Date());
        newMessage.push();
        renderMessages();
        }
    

    var messageCount = function(){
        var count = document.createElement("p");
        var number = messages.Length;
        if(this.messages === undefined){
            number = 0;
        }
        count.innerHTML = "Antal meddelanden: " + number;
        document.getElementById("board").lastChild(count);
    }

    renderMessage: function (messageID) {
        var text = document.createElement("p");
        text.innerHTML = MessageBoard.messages[messageID].getHTMLText();
        date.innerHTML = MessageBoard,messages[messageID].getHTMLDate();
        document.getElementById("board").appendChild(text + "/br" + date );


    }
};

window.onload = function () {
    new MessageBoard("board");
};





