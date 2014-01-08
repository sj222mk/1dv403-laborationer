"use strict";

var memoryGame = memoryGame || {};

memoryGame.Memory = function(rows, cols, memoryId, memoryName){
    var counterDraw = 0;
    var counterAlike = 0;
    var picOne;
    var picTwo;
    var col = cols;
    var row = rows;
    var id = memoryId;
    var name = memoryName;
    var random = [];
    
    memoryGame.RandomGenerator.getPictureArray(row, col).forEach(function(number){
        random.push(number); 
    });
    
    makeTable(row, col, id, name);
        
    function makeTable(row, col, id, name){
        var no = 0;
        
        var table = document.createElement("table");
        var thead = document.createElement("thead");
        
        var th = document.createElement("th");
        th.colSpan = col;
        th.innerHTML = name;
        thead.appendChild(th);
        table.appendChild(thead);
        var tbody = document.createElement("tbody"); 
        table.appendChild(tbody);
        
        for(var r = 0; r < row; r++){
            tbody.insertRow(r);
            
            for(var c = 0; c < col; c++){
                tbody.rows[r].insertCell(c);
                var a = document.createElement("a");
                a.href = "#";
                a.id = no;
                
                var img = document.createElement("img");
                img.src = "pics/0.png";
                img.class = "cards";
                img.name = no;
                
                a.onclick = function(){
                    turnAround(this);
                };
                
                a.appendChild(img);
                tbody.rows[r].cells[c].appendChild(a);

                no += 1;
            }
        }
        var memoryNr = document.getElementById(id);
        memoryNr.appendChild(table);
    }
    
    function lookAlike(){
        if (picOne.children[0].src !== picTwo.children[0].src){
            setTimeout(function(){
                turnBack(); 
                }, 1000);
            }
        else{
            counterAlike +=1;
            picOne.onclick = null;
            picTwo.onclick = null;
            
            if(counterAlike === col * row / 2){
                setTimeout(function(){
                    alert(id + " är slut! Du klarade det på " + counterDraw/2 + " försök!");
                }, 1000);
            }
        }
    }
    
    function turnAround(a){
        counterDraw +=1;
        
        if (counterDraw % 2 !== 0){        
            picOne = a;
            picOne.children[0].src = "pics/" + random[picOne.id] + ".png";
        }
        else{
            picTwo = a;
            picTwo.children[0].src = "pics/" + random[picTwo.id] + ".png";
            lookAlike();
        }
    }
    
    function turnBack(){
        picOne.children[0].src = "pics/0.png";
        picTwo.children[0].src = "pics/0.png";
    }


}; 


