// Variable avec un mot a trouver
let mot = [
  'ARENE',
  'APERO',
  'ABYME',
  'BOULE',
  'CRASH',
  'CODES',
  'CROCO',
  'DOIGT',
  'DINGO',
  'DISPO',
  'DORER',
  'FAGOT',
  'FAKIR',
  'FESSE',
  'FICHU',
  'FILMS',
  'FURIE',
  'TITRE',
  'JETER',
  'JUPON',
  'MERLU',
  'MICRO',
  'METAL',
  'MIEUX',
  'NOTRE',
  'OASIS',
  'OBJET',
  'OCEAN',
  'PUENT',
  'PULPE',
  'REPAS',
  'ROBOT',
];
let progress = [];
let essaisRates = 8;
let lettreTrouvee = 0;
 var lettre = document.getElementById("text");
 var lettreOk = false;

let randmot = mot[Math.floor(Math.random() * mot.length)];
// Math.random :un chiffre entre 0 et 1.
// mot.length : nbr total d'élements dans tableau mot.
//Math.floor :Arrondie le nombre au entier ex: 1.5≅ 2

console.log(randmot);

/* --------------------------------------------------------------------------------------------------------- */

// création de la boucle des mots//totalité du tableau (mots.length) et les traits
for (i = 0; i < randmot.length; i++) {
  progress[i] = ' _ ';
}

/* -------------------------------------------------------------------------------------------------------- */
/* Fonction qui affiche le mot mystére (traits et lettres) */

function gabarit() {
  let motMystere = document.getElementById('motMystere');
  motMystere.innerHTML = progress.join(' '); /* fusion des mots du tableau a suite */
}

/* --------------------------------------------------------------------------------------------------- */

/* Fonction qui valide les bonnes lettre Juste, dans la case en remplissant les traits pour afficher le mot */

function afficherCase() {
 
 

  for (i = 0; i < randmot.length; i++) {
    if (lettre.value.toUpperCase() == randmot[i] && lettre.value.toUpperCase() != progress[i]) {
      lettreOk = true;
      lettreTrouvee = lettreTrouvee +1; /* incrementation de lettre trouvée */
      progress[i] = lettre.value.toUpperCase();
      motMystere.innerHTML = progress.join(' ');

    }
  }
  //----------------------------------------------------------------------------------------------
  // Alert qui indique bonne réponse
  if (lettreTrouvee == randmot.length) {
    // alert('Félicitation');
    setTimeout(function(){ alert("Félicitation"); }, 30);
  }
  // Condition qui permet de retirer un essai 
  if (lettreOk == false) {
    essaisRates--;
}
//---------------------------------------------------------------------------------------------------
// Condition qui permet de compter le nombre d'essais.
if (essaisRates == 0) {
  alert('Perdu! Rafraichis la page pour retenter ta chance!');
}
lettreOk = false;

lettre.value = '';
}
