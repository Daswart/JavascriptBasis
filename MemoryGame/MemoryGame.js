document.addEventListener('DOMContentLoaded',() =>{
    var kaartarray = [
        {
            name: 'kat1',
            img: 'images/kat1.jpg'
        },
        {
            name: 'kat1',
            img: 'images/kat1.jpg'
        },
        {
            name: 'kat2',
            img: 'images/kat2.jpg'
        },
        {
            name: 'kat2',
            img: 'images/kat2.jpg'
        },
        {
            name: 'kat3',
            img: 'images/kat3.jpg'
        },
        {
            name: 'kat3',
            img: 'images/kat3.jpg'
        },
        {
            name: 'kat4',
            img: 'images/kat4.jpg'
        },
        {
            name: 'kat4',
            img: 'images/kat4.jpg'
        },
        {
            name: 'kat5',
            img: 'images/kat5.jpg'
        },
        {
            name: 'kat5',
            img: 'images/kat5.jpg'
        },
        {
            name: 'kat6',
            img: 'images/kat6.jpg'
        },
        {
            name: 'kat6',
            img: 'images/kat7.jpg'
        },
        {
            name: 'kat7',
            img: 'images/kat7.jpg'
        },
        {
            name: 'kat7',
            img: 'images/kat7.jpg'
        },
        {
            name: 'kat8',
            img: 'images/kat8.jpg'
        },
        {
            name: 'kat8',
            img: 'images/kat8.jpg'
        },
        {
            name: 'kat9',
            img: 'images/kat9.jpg'
        },
        {
            name: 'kat9',
            img: 'images/kat9.jpg'
        },


    ]
    console.log(kaartarray)

    var kaartcontainer = document.querySelector('#kaartcontainer')

    function aanmaakBord(){
        for(i = 0; i < kaartarray.length; i++ ){
            var kaart = document.createElement('img')
            kaart.setAttribute('src', 'images/catface.jpg')
            kaart.setAttribute('id', i)
            kaartcontainer.appendChild(kaart)

        }

    }
    aanmaakBord()



})














//let winner = null;
//let movesMade = 0;
//let lastBlockClicked = null;
//let waitingForNextMove = true;
//let pointsRoshni = 0;
//let pointsAura = 0;
//let players = ["Daan", "Laura"];
//let flippedCards = [null, null];

//showWhatPlayer();
//showScore();
//showWhatPlayer()

/*function showWhatPlayer() {
    let currentPlayer = Math.floor(Math.random() * 2);
    document.getElementById("beurt").innerHTML = players[currentPlayer];
    console.log(players[currentPlayer])
}*/



/*var kaartholder = document.getElementsByClassName("kaartholder")


catImageArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]
for (i = 0; i < catImageArray.length; i++) {
    catImage = document.createElement('img')
    catImage.src = "images/kat" + (Math.floor(Math.random() * 9) + 1) + ".jpg"
    console.log(catImage.src)
    //catImage.addEventListener("click", draaiKaart);
    kaartholder[i].appendChild(catImage)


}
function draaiKaart(){
    catImage.src = "images/kat9.jpg";
    console.log('draai mij om');
}
document.getElementsByClassName()*/





