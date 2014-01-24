"use strict";

var DESKTOP = DESKTOP || {};

DESKTOP.imageViewer = function(winBody){
    var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
    var jSonData = null;
    var jSonLength = null;
    
    getAjax();
    
    function getAjax(){
        new DESKTOP.Ajax(url, function(text){
            if(text){
                jSonData = JSON.parse(text);
                createImages(jSonData);
                clearTimeout();
                }
            });
        }
    
    
    
    
    function createImages(array){
        jSonLength = jSonData.length;
        
        for(var i = 0; i < jSonLength; i ++){
            var a = document.createElement("a");
            a.href = "#";
            var img = document.createElement("img");
            img.id = i;
            img.class = "small";
            img.href = "#";
            img.src = array[i].URL;
            a.appendChild(img);
            winBody.appendChild(a);
        }
    }
    
    
};