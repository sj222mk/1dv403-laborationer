"use strict";

var DESKTOP = DESKTOP || {};

DESKTOP.View = function(){
    var content = document.getElementById("content");
    var miniWin;
    var winBody;
    
    function createMiniWin(){
        var footer = document.getElementById("footer");
        miniWin = document.createElement("img");
        miniWin.id = "miniWindow";
        miniWin.class = "closed";
        miniWin.href = "#";
        miniWin.src = "pics/photo_folder.png";
        footer.appendChild(miniWin);
        
        miniWin.onclick =  function(){
                if(miniWin.class === "closed"){
                    miniWin.class = "open";
                    createWindowApp();
                    DESKTOP.imageViewer(winBody);
                    }
                };
            }
    
    function createWindowApp(){
        var windowApp = document.createElement("div");
        windowApp.id = "app";
        content.appendChild(windowApp);
        
        var winHeader = document.createElement("div");
        winHeader.id = "windowHeader";
        var h2 = document.createElement("h2");
        var header = document.createTextNode("Image Viewer");
        h2.appendChild(header);
        winHeader.appendChild(h2);
        windowApp.appendChild(winHeader);
        
        //Stänga-knapp i hörnet
        var closeButton = document.createElement("img");
        closeButton.id = "closeButton";
        closeButton.href = "#";
        closeButton.src = "pics/cancel.png";
        winHeader.appendChild(closeButton);
        
        winBody = document.createElement("div");
        winBody.id = "windowBody";
        windowApp.appendChild(winBody);
        
        var winFooter = document.createElement("div");
        winFooter.id = "windowFooter";
        winFooter.appendChild(loadImg());
        windowApp.appendChild(winFooter);
        
        closeButton.onclick =  function(){
            closeWindowApp(windowApp);
            };
        }
    
    function loadImg(){
        var loader = document.createElement("img");
        loader.id = "loader";
        loader.href = "#";
        loader.style.display = "block";
        loader.src = "pics/ajax-loader.gif";
        return loader;
        }
    
    function closeWindowApp(windowApp){
        //var winApp = document.getElementById("app");
        windowApp.parentNode.removeChild(windowApp);
        miniWin.class = "closed";
        }
    
    createMiniWin();
};

window.onload = function () {
   DESKTOP.View();
};  


        
        