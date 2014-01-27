"use strict";

var DESKTOP = DESKTOP || {};

DESKTOP.View = function(){
    var content = document.getElementById("content");
    var miniWinA;
    var winBody;
    
    function createMiniWin(){
        var footer = document.getElementById("footer");
        footer.appendChild(createImageStarter());
        }
    
    function createImageStarter(){
        miniWinA = document.createElement("a");
        miniWinA.id = "miniWindow";
        miniWinA.href = "#";
        miniWinA.class = "closed";

        var miniWinPic = document.createElement("img");
        miniWinPic.src = "pics/photo_folder.png";
        miniWinPic.class = "starter";
        miniWinA.appendChild(miniWinPic);
        
        miniWinA.onclick =  function(){
                if(miniWinA.class === "closed"){
                    miniWinA.class = "open";
                    createWindowApp();
                    DESKTOP.imageViewer(winBody);
                    }
                };
            return miniWinA;
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
            
        window.onkeyup = function () {
            if (event.keyCode === 27 && miniWinA.class === "open"){
                closeWindowApp(windowApp);
                }
            };
        }
    
    function loadImg(){
        var loader = document.createElement("img");
        loader.id = "loader";
        loader.style.display = "block";
        loader.src = "pics/ajax-loader.gif";
        return loader;
        }
    
    function closeWindowApp(windowApp){
        windowApp.parentNode.removeChild(windowApp);
        miniWinA.class = "closed";
        }
    
    createMiniWin();
};

window.onload = function () {
   DESKTOP.View();
};  


        
        