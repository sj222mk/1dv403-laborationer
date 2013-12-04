"use strict";
var messageSystem = messageSystem || {};
//Konstruktorfunktion - klass för meddelanden
messageSystem.Message = function (message, date) {

    this.getText = function () {
        return message;
    };
    
    this.setText = function(_text) {
        message = _text;
    };

    this.getDate = function(){
        return date;
    };

    this.setDate = function (_date) {
        _date = new Date();
    };
    
}

messageSystem.Message.prototype.toString = function () {
    return this.getText() + " (" + this.getDate() + ")";
};

messageSystem.Message.prototype.getHTMLText = function () {
    var message = this.getText();
    return message.replace(/[\n\r]/g, "<br />");
};

messageSystem.Message.prototype.getDateText = function () {
    this.getDate();
    return this.date();
};

