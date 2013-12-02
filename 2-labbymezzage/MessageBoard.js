"use strict";

var MessageBoard = {

    messages: [],

    init: function () {
        var text = "Test1";
        var mess = new Message(text, new Date());
        this.messages.push(text);
        text = "Test2";
        this.messages.push(text);
        this.messages.push("test3", "test4");
        alert(this.messages)
    }
};
window.onload = MessageBoard.init();





