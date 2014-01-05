"use strict";

var memoryGame = memoryGame || {};

memoryGame.MemoryApp = {
   init: function(){
      var memory1 = new memoryGame.Memory(4, 2, "memory1", "Memory 1");
      var memory2 = new memoryGame.Memory(4, 3, "memory2", "Memory 2");
      var memory3 = new memoryGame.Memory(4, 4, "memory3", "Memory 3");
      //memory1.memoryGame.makeTable();
      /*memory2.start();*/
   }
};

window.onload = memoryGame.MemoryApp.init;     
