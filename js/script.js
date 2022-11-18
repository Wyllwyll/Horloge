// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
let today = new Date();
//let dateNow = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//console.log(today);

//Stocker l'heure , minute , seconde  dans des variables
let hours = today.getHours();
let minutes = today.getMinutes();
let sec = today.getSeconds();
console.log(hours);
console.log(minutes);
console.log(sec);


// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
/* 
°heures=12h par tour, 1h=3600s 43200sec par tour, 360/43200 = 0.008°par seconde
°minutes= 60min/tour,pour 1sec : 360/3600= 0.1°par seconde
°secondes=60sec par tour , pour 1sec = 360/60 = 6° par seconde
*/
const hoursdeg = 360 / 43200;
const minutesdeg = 360 / 3600;
const secdeg = 360 / 60;

// Déplacer les aiguilles 


function demarrerLaMontre() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let sec = today.getSeconds();
    document.querySelector("#hour").style.transform = `rotate(${hoursdeg * hours * 3600}deg)`;
    document.querySelector("#minute").style.transform = `rotate(${minutesdeg * minutes * 60}deg)`;
    document.querySelector("#second").style.transform = `rotate(${secdeg * sec}deg)`;

}


// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);

