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

// Variables
let scores = [null, 0, 0];
let activePlayer = 1;
let roundScore = 0;
let gamePlaying = true;

// Fonction Change Name
function editNames() {
    const player1 = prompt("Inscrit le nom du joueur 1 :");
    const player2 = prompt("Inscrit le nom du joueur 2 :");

    document.querySelector("#name-1").innerHTML = player1;
    document.querySelector("#name-2").innerHTML = player2;
}

//New Game
function newGame() {
    let response = "Voulez-vous vraiment relancer le jeu ?";
    if (confirm(response) == true) {
        window.location.reload();
    } else {
        return false;
    }
}

// Fonction NEXT PLAYER
function nextPlayer() {
    //Next player
    activePlayer === 1 ? (activePlayer = 2) : (activePlayer = 1);
    roundScore = 0;

    document.getElementById("current-1").textContent = "0";
    document.getElementById("current-2").textContent = "0";

    document.querySelector(".player1").classList.toggle("active");
    document.querySelector(".player2").classList.toggle("active");
}

// Fonction ROLL DICE
document.querySelector(".btn-roll").addEventListener("click", () => {
    if (gamePlaying) {
        //  Random number
        let dice = Math.floor(Math.random() * 6) + 1;

        // Show the result of dice
        let diceDOM = document.querySelector(".dice");
        diceDOM.style.display = "block";
        diceDOM.src = "images/de" + dice + ".webp";

        // If Dice On 1
        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector("#current-" + activePlayer).textContent =
                roundScore;
            // NextPLayer
        } else {
            nextPlayer();
        }
    }
});
// Fonction HOLD
document.querySelector(".btn-hold").addEventListener("click", () => {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;
        document.querySelector("#score-" + activePlayer).textContent =
            scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= 100) {
            let winner = document.querySelector(
                "#name-" + activePlayer,
            ).textContent;
            document.querySelector("#name-" + activePlayer).textContent =
                winner + "  " + "Winner !";
            document.querySelector(".dice").style.display = "none";
            document.querySelector(".btn-roll").style.display = "none";
            document.querySelector(".btn-hold").style.display = "none";
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});
