"use strict";

var memoryGame = memoryGame || {};

memoryGame.Memory = {
    random : [],
    
};

    memoryGame.init = function(e){
        var row = 3;
        var col = 4;
        
        memoryGame.RandomGenerator.getPictureArray(row, col).forEach(function(number){
            memoryGame.Memory.random.push(number); 
        });
        
        memoryGame.makeTable(row, col);
    }; 
    
    memoryGame.makeTable = function(rows, cols){
        var no = 0;
        
        var table = document.createElement("table");
        var tbody = document.createElement("tbody"); 
        table.appendChild(tbody);
        
        for(var r = 0; r < rows; r++){
            tbody.insertRow(r);
            
            for(var c = 0; c < cols; c++){
                tbody.rows[r].insertCell(c);
                var a = document.createElement("a");
                a.onclick = function(){
                    
                };
                
                var img = document.createElement("img");
                img.src = "pics/" + memoryGame.Memory.random[no] + ".png";
                
                a.appendChild(img);
                tbody.rows[r].cells[c].appendChild(a);
                
                no += 1;
            }
        }
        document.body.appendChild(table);
    };

window.onload = function () {
   memoryGame.init();
};
