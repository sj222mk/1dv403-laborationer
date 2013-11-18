"use strict";

window.onload = function(){
	
	var secret = Math.floor(Math.random()*100)+1; // Slumptal mellan 1 - 100
	var count = 0;
	
	// Varje gissning hanteras här
	var guess = function(number){
		
		var answers = [];
		answers[0] = [true, "Grattis du vann! Det hemliga talet var " + secret + " och du behövde " + count + " gissningar för att hitta det."];
		answers[1] = [false, "Det hemliga talet är högre!"];
		answers[2] = [false, "Det hemliga talet är lägre!"];
		answers[3] = [false, "Talet är utanför intervallet 0 - 100"];
		answers[4] = [false, "Det du matade in tolkades inte som ett tal!"];
        
        if(isNaN(number)){
            return (answers[4]);
        }
        else if(number < 1 || number > 100){
			return (answers[3]);
        }
        
        count ++;

		if (number == secret){
			return (answers[0]);
		}
		else if(number < secret){
			return (answers[1]);
		}
		else if(number > secret){
			return (answers[2]);
		}
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};