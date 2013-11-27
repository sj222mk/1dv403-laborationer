"use strict";
//Konstruktorfunktion - klass för meddelanden
function Message(message, date) {

    this.getText = function () {
        return message;
    }
    
    this.setText = function(_text){
        message = text;
    }

    this.getDate = function(){
        return date;
    }

    this.setDate = function (_date) {
        var date = new Date();
    }
}

Message.prototype.toString = function () {
    return this.getText() + " (" + this.getDate() + ")";
}

Message.prototype.getHTMLText = function () {
    this.getText();
    return this.setText();
}

