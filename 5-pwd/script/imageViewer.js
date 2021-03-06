"use strict";

var DESKTOP = DESKTOP || {};

DESKTOP.imageViewer = function(){
    var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
    var loader = document.getElementById("loader");
    var jSonData = null;
    var jSonLength = null;
    var maxHeight = 0;
    var maxWidth = 0;
    
    function getAjax(){
        loader.style.display = "block";
        new DESKTOP.Ajax(url, function(text){
            if(text){
                jSonData = JSON.parse(text);
                createImages();
                loader.style.display = "none";
                clearTimeout();
                }
            });
        }
    
    function createImages(){
        var winBody = document.getElementById("windowBody");
        var ul = document.createElement("ul");
        jSonLength = jSonData.length;
        maxSize();
        
        for(var i = 0; i < jSonLength; i ++){
            ul.appendChild(createLi(i));
            }
        winBody.appendChild(ul);
        }
    
    function createLi(i){
        var li = document.createElement("li");
        li.style.height = String((maxHeight + 100) + "px");
        li.style.width = String((maxWidth + 25) + "px");
        var a = document.createElement("a");
        a.href = "#";
        a.id = i;
        
        a.appendChild(getPic(i));
        
        a.onclick = function(){
            loader.style.display = "block";
            setBackground(i);  
            loader.style.display = "none";
        };
        
        li.appendChild(a);
        return li;
        }
    
    function getPic(i){
        var pic = document.createElement("img");
        pic.class = "thumb";
        pic.src = jSonData[i].thumbURL;    
        return pic;
        }
    
    function maxSize(){
        jSonData.forEach(function(img){
            maxHeight = Math.max(maxHeight, img.thumbHeight);
            maxWidth = Math.max(maxWidth, img.thumbWidth);
            });
        }
        
    function setBackground(a){
        var container = document.getElementById("container");
        container.style.backgroundImage = String("url(" + jSonData[a].URL + ")");
        container.setAttribute("class", "img");
    }
    
    getAjax();
};