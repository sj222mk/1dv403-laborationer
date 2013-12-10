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
        
      
        /*tbody.insertRow(0);
        tbody.rows[0].insertCell(0);
        tbody.rows[0].cells[0].appendChild(document.create("Cell 1,1"));
        tbody.rows[0].insertCell(1);
        tbody.rows[0].cells[1].appendChild(document.createTextNode("Cell 2,1"));*/
        
        for(var r = 0; r < rows; r++){
            tbody.insertRow(r);
            
            for(var c = 0; c < cols; c++){
                tbody.rows[r].insertCell(c);
                var img = document.createElement("img");
                img.src = "pics/" + memoryGame.Memory.random[no] + ".png";
                tbody.rows[r].cells[c].appendChild(img);
                no += 1;
            }
        }
        document.body.appendChild(table);
    };

window.onload = function () {
   memoryGame.init();
};
