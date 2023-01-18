// Pour l'exercice 2
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

// > Event Target

// ### 1. Créer un programme qui au clique d'un des éléments de la div l'élément s'affiche dans la console, en utilisant une boucle pour appliquer un écouteur d'événement sur chaque élément !


let tout = document.getElementById("content").children;
console.log(tout);

Array.from(tout).forEach((element) => {
        element.addEventListener("dblclick", () => {
        element.innerText = element.innerText.toUpperCase();
    });
});

// ### 2. Créer un programme qui au double click d'un élément son texte est en majuscule


// ### 3. Créer un programme qui au hasard choisis parmis les propriétés suivants et l'applique aux éléments quand on clique sur le button GO : 
// - border: 1px solid gold;
// - background-color: blue;
// - background-color: red;
// - border: 5px dotted gold;


let couleurs = [
    "border: 1px solid gold;",
    "background-color: blue;",
    "background-color: red;",
    "border: 5px dotted gold;",
];

let randomCouleurs = Math.floor(Math.random() * couleurs.length);
console.log(randomCouleurs);

document.querySelector("input").addEventListener("click", () => {
        Array.from(tout).forEach((element) => {
        element.setAttribute("style", couleurs[randomCouleurs]);
    });
});