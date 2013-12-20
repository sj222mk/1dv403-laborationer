"use strict";

var memoryGame = memoryGame || {};

memoryGame.counterDraw = 0;
memoryGame.counterAlike = 0;
memoryGame.picOne;
memoryGame.picTwo;

memoryGame.Memory = {
    random : [],



    init : function(){
        var col = 4;
        var row = 3;
        /*memoryGame.id = node;*/
        memoryGame.RandomGenerator.getPictureArray(row, col).forEach(function(number){
            memoryGame.Memory.random.push(number); 
        });
        
        memoryGame.makeTable(row, col);
        
        
    } 
};    
    memoryGame.makeTable = function(rows, cols){
        var no = 0;
        
        var table = document.createElement("table");
        var thead = document.createElement("thead");
        
        var th = document.createElement("th");
        th.colSpan = cols;
        th.innerHTML = "Spel 1";
        thead.appendChild(th);
        table.appendChild(thead);
        var tbody = document.createElement("tbody"); 
        table.appendChild(tbody);
        
        
        for(var r = 0; r < rows; r++){
            tbody.insertRow(r);
            
            for(var c = 0; c < cols; c++){
                tbody.rows[r].insertCell(c);
                var a = document.createElement("a");
                a.href = "#";
                a.id = no;
                
                var img = document.createElement("img");
                img.src = "pics/0.png";
                img.class = "cards";
                img.name = no;
                
                a.onclick = function(){
                    memoryGame.turnAround(this);
                };
                
                a.appendChild(img);
                tbody.rows[r].cells[c].appendChild(a);

                no += 1;
            }
        }
        var memory = document.getElementById("memory1");
        memory.appendChild(table);
    };
    
    memoryGame.lookAlike = function(){
        if (memoryGame.picOne.children[0].src !== memoryGame.picTwo.children[0].src){
            setTimeout(function(){
                memoryGame.turnBack(); 
                }, 1000);
            }
        else{
            memoryGame.counterAlike +=1;
            
            if(memoryGame.counterAlike === memoryGame.col * memoryGame.row / 2){
                setTimeout(function(){
                    alert("Spelet är slut! Du klarade det på " + memoryGame.counterDraw/2 + " försök!");
                }, 1000);
            }
        }
    };
    
    memoryGame.turnAround = function(a){
        memoryGame.counterDraw +=1;
        
        if (memoryGame.counterDraw % 2 !== 0){        
            memoryGame.picOne = a;
            memoryGame.picOne.children[0].src = "pics/" + memoryGame.Memory.random[memoryGame.picOne.id] + ".png";
        }
        else{
            memoryGame.picTwo = a;
            memoryGame.picTwo.children[0].src = "pics/" + memoryGame.Memory.random[memoryGame.picTwo.id] + ".png";
            memoryGame.lookAlike();
        }
    };
    
    memoryGame.turnBack = function(){
        memoryGame.picOne.children[0].src = "pics/0.png";
        memoryGame.picTwo.children[0].src = "pics/0.png";
    };

window.onload = function () {
   memoryGame.Memory.init();
};
