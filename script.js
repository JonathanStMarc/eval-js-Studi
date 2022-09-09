/*
Règles :
- La possibilité de créer une nouvelle partie
- La possibilité de retenir le score courant
- La possibilité de lancer le dé
- La possibilité d’avoir 2 joueurs
bonus :
- changer le nom des joueurs

Le jeu comprend 2 joueurs sur un seul et même écran.
Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL).
À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le
résultat d’un lancer est ajouté au ROUND.
Lors de son tour, le joueur peut décider à tout moment de:
- Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors le
tour de l’autre joueur.
- Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.
Le premier joueur qui atteint les 100 points sur global gagne le jeu.
*/
let scores = [0, 0];
let activePlayer = 0;
let roundScore = 0;
let gamePlaying = true;

// Fonction Change Name
function editNames() {
    player1 = prompt("Inscrit le nom du joueur 1 :");
    player2 = prompt("Inscrit le nom du joueur 2 :");

    document.querySelector("#name-0").innerHTML = player1;
    document.querySelector("#name-1").innerHTML = player2;
}
