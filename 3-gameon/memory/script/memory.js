"use strict";

var memoryGame = memoryGame || {};

memoryGame.Memory = {
    random : [],
   
};

    memoryGame.init = function(e){
        var newRandom = new memoryGame.RandomGenerator.getPictureArray(2, 4);
        memoryGame.Memory.random.push(newRandom);
        alert(memoryGame.Memory.random);
       
    }; 

window.onload = function () {
   memoryGame.init();
};
