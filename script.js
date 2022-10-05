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
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let playerName1 = document.querySelector(".playerName1");
let playerName2 = document.querySelector(".playerName2");
let currentScore1 = document.getElementById("current-1");
let currentScore2 = document.getElementById("current-2");
let btnHold = document.querySelector(".btn-hold");
let btnRoll = document.querySelector(".btn-roll");
let diceDOM = document.querySelector(".dice");
let response = "Voulez-vous vraiment relancer le jeu ?";
let animateDice = document.getElementById("animateDiceOnClick");

// Fonction Change Name
function editNames() {
    const changePlayerName1 = prompt("Inscrit le nom du joueur 1 :");
    const changePlayerName2 = prompt("Inscrit le nom du joueur 2 :");

    playerName1.innerHTML = changePlayerName1;
    playerName2.innerHTML = changePlayerName2;
}

//New Game
function newGame() {
    response;
    if (confirm(response) == true) {
        window.location.reload();
    } else {
        return false;
    }
}
// Function for dice animate
btnRoll.addEventListener("click", () => {
    animateDice.classList.toggle("turnDice");
    // animateDice.classList.remove("turnDice");
});

// Fonction NEXT PLAYER
function nextPlayer() {
    //Next player
    activePlayer === 1 ? (activePlayer = 2) : (activePlayer = 1);
    roundScore = 0;

    currentScore1.textContent = "0";

    currentScore2.textContent = "0";

    player1.classList.toggle("active");
    player2.classList.toggle("active");
}

// Fonction ROLL DICE
btnRoll.addEventListener("click", () => {
    if (gamePlaying) {
        //  Random number
        let dice = Math.floor(Math.random() * 6) + 1;
        // diceDOM.style.display = "block";
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
btnHold.addEventListener("click", () => {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;
        document.querySelector("#score-" + activePlayer).textContent =
            scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= 100) {
            const winner = document.querySelector(
                "#name-" + activePlayer,
            ).textContent;
            document.querySelector("#name-" + activePlayer).textContent =
                winner + "  " + "Winner !";
            document.querySelector(".dice").style.display = "none";
            btnRoll.style.display = "none";
            btnHold.style.display = "none";
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});
