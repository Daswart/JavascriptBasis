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


function showWhatPlayer() {
    let currentPlayer = Math.floor(Math.random() * 2);
    document.getElementById("beurt").innerHTML = players[currentPlayer];
    console.log(players[currentPlayer])
}

var kaartholder = document.getElementsByClassName("kaartholder")





catImageArray = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]
for(i = 0; i < catImageArray.length; i++ ){
    catImage = document.createElement('img')
    catImage.src = "images/kat" + (Math.floor(Math.random() * 9) + 1) + ".jpg"
    console.log(catImage.src)
    kaartholder[i].appendChild(catImage)
    //catImage.style.display = 'none';
}


