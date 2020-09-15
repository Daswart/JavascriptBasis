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
showWhatPlayer()


function showWhatPlayer(){
    let currentPlayer = Math.floor(Math.random() * 2);
    document.getElementById("beurt").innerHTML = players[currentPlayer];
    console.log(players[currentPlayer])
}
