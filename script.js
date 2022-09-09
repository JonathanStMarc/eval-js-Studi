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
// index a 1 et 2 pour le tableau des scores.
let scores = [0, 0, 0];
let activePlayer = 1;
let roundScore = 0;
let gamePlaying = true;

// Fonction Change Name
function editNames() {
    player1 = prompt("Inscrit le nom du joueur 1 :");
    player2 = prompt("Inscrit le nom du joueur 2 :");

    document.querySelector("#name-1").innerHTML = player1;
    document.querySelector("#name-2").innerHTML = player2;
}

// Fonction NEXT PLAYER
function nextPlayer() {
    //Next player
    activePlayer === 1 ? (activePlayer = 2) : (activePlayer = 1);
    roundScore = 0;

    document.getElementById("current-1").textContent = "0";
    document.getElementById("current-2").textContent = "0";

    document.querySelector(".player1Panel").classList.toggle("active");
    document.querySelector(".player2Panel").classList.toggle("active");
}

// Fonction ROLL DICE
document.querySelector(".btn-roll").addEventListener("click", () => {
    if (gamePlaying) {
        // 1. Random number
        let dice = Math.floor(Math.random() * 6) + 1;

        //2. Show the result if dice
        let diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "images/de" + dice + ".webp";

        //3. If Dice On 1
        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector("#current-" + activePlayer).textContent =
                roundScore;
        } else {
            nextPlayer();
        }
    }
});
