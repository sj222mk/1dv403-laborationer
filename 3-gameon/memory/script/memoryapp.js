"use strict";

var memoryGame = memoryGame || {};

memoryGame.MemoryApp = {
   init: function(){
      var memory1 = new memoryGame.Memory(3, 4, "memory1");
      /*var memory2 = new memoryGame.Memory(3, 4, "memory2");*/
      memory1.start();
      /*memory2.start();*/
   }
};