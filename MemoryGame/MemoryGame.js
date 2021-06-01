//let winner = null;
//let movesMade = 0;
//let lastBlockClicked = null;
//let waitingForNextMove = true;
//let pointsRoshni = 0;
//let pointsAura = 0;
let players = ["Daan", "Laura"];
//let flippedCards = [null, null];
//showWhatPlayer();
//showScore();
let currentPlayer = Math.floor(Math.random() * 2);
showWhatPlayer()

//functie voor het bepalen wie aan zet is
function showWhatPlayer() {
    document.getElementById("beurt").innerHTML = players[currentPlayer];
    console.log(players[currentPlayer])


}

//Functie voor een geschud kaartendek.
let CatArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]

