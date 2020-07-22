var addPointplayer1 = document.getElementsByClassName("player1")[0];
var addPointPlayer2 = document.getElementsByClassName("player2")[0];
var reset = document.getElementsByClassName("reset")[0];
var play1Display = document.getElementById("play1Display");
var play2Display = document.getElementById("play2Display");
var player1Score = 0;
var player2Score = 0;
var gameOver = false;
var userInput = document.getElementsByClassName("winningScore")[0];
var playingTo = document.getElementsByClassName("lastPoint")[0];
var winningScore = 5;

userInput.addEventListener("change", function(){
    playingTo.textContent = userInput.value;
    winningScore = parseInt(userInput.value);
})


addPointplayer1.addEventListener("click", function () {
    if (!gameOver) {
        player1Score++;
        if (player1Score === winningScore) {
            gameOver = true;
            updateScore()
            play1Display.classList.add("winning");
        } else {
            updateScore()
        }
    }
})

addPointPlayer2.addEventListener("click", function () {
    if (!gameOver) {
        player2Score++;
        if (player2Score === winningScore) {
            gameOver = true;
            updateScore()
            play2Display.classList.add("winning");
        } else {
            updateScore()
        }
    }
})

reset.addEventListener("click", function () {
    player1Score = 0;
    player2Score = 0;
    play1Display.classList.remove("winning");
    play2Display.classList.remove("winning");
    gameOver = false;
    playingTo.textContent = 5;
    userInput.value = "";
    winningScore = 5;
    updateScore()
})

function updateScore() {
    play1Display.textContent = player1Score;
    play2Display.textContent = player2Score;
}