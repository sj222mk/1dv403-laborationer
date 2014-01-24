"use strict";

var DESKTOP = DESKTOP || {};

//Konstruktorfunktion - klass för ajaxanrop
DESKTOP.Ajax = function (url, callback) {
  var READY_STATE_OPENED = 1;
  var READY_STATE_SENT = 2;
  var READY_STATE_LOADING = 3;
  var READY_STATE_COMPLETE = 4;
  
  var xhr = this.getXHR();
  
  xhr.onreadystatechange = function(){
    if(xhr.readyState === READY_STATE_COMPLETE){
        if(xhr.status >= 200 && xhr.status <= 300 || xhr.status === 304){
            callback(xhr.responseText);
            }
        else{
            console.log("Läsfel, status: " + xhr.status);
            }
        }
    };
  xhr.open("get", url, true);
  xhr.send(null);
};

DESKTOP.Ajax.prototype.getXHR = function(){
  var xhr = null;
  
  try{
      xhr = new XMLHttpRequest();
  }
  catch(error){
      try{
          xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
      catch(error){
          throw new Error("No XHR object available");
      }
  }
  return xhr;
};