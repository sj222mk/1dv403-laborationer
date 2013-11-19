"use strict";

window.onload = function () {

    // Koden för att hantera "spelet"
    var convertString = function (str) {

        var message = ["Du måste skriva in en text för att kunna omvandla!"];
        var i = 0;
        var arr = [];

        var trimmedStr = str.trim();
        var length = trimmedStr.length;

        if (length < 1) {
            return message;
        }

        for (i = 0; i <= length; i++) {
            var string = trimmedStr.charAt(i);

            if (string === "a" || string === "A") {
                string = "#";
            }
            else if (string === string.toLocaleUpperCase()) {
                string = string.toLocaleLowerCase();
            }
            else if (string === string.toLocaleLowerCase()) {
                string = string.toLocaleUpperCase();
            }

            arr[i] = [string];
        }
        arr[0] = arr.join("");
        return arr[0];
    };
    // ------------------------------------------------------------------------------


    // Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
    var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
    var input = document.querySelector("#string");
    var submit = document.querySelector("#send");

    // Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
    submit.addEventListener("click", function (e) {
        e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

        p.classList.remove("error");

        try {
            var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
            p.innerHTML = answer; 	// Skriver ut texten från arrayen som skapats i funktionen.	
        } catch (error) {
            p.classList.add("error"); // Växla CSS-klass, IE10+
            p.innerHTML = error.message;
        }

    });



};