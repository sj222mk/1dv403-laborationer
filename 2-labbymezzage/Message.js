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
    
};

/*Vad skulle denna prototypen egentligen användas till???*/
messageSystem.Message.prototype.toString = function () {
    /*return this.getText() + " (" + this.getDate() + ")";*/
    var year = this.getDate().getFullYear();
    var m = new Array("januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december");
    var month = m[this.getDate().getMonth()];
    var day = this.getDate().getDate();
    var time = this.getDateText();
    return "Inlägget skapades " + day + " " + month + " " + year + " klockan " + time;
};

messageSystem.Message.prototype.getHTMLText = function () {
    var message = this.getText();
    return message.replace(/[\n\r]/g, "<br />");
};

messageSystem.Message.prototype.getDateText = function () {
    /*var hours;
    var minutes;
    var seconds;
    
    if(this.getDate().getHours() < 10){
        hours = "0" + this.getDate.getHours();
    }
    else{
        hours = this.getDate().getHours();
    }
    
    if(this.getDate().getMinutes() <10){
        minutes = "0" + this.getDate.getMinutes();
    }
    else{
        minutes = this.getDate().getMinutes();
    }
    
    if(this.getDate().getSeconds() < 10){
        seconds = "0" + this.getTime().getSeconds();
    }
    else{
        seconds = this.getDate().getSeconds();
    }
    
    return hours + ":" + minutes + ":" + seconds;*/
    return this.getDate().toLocaleTimeString();
};

