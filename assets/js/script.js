document.addEventListener("DOMContentLoaded", function () {

    const startButton = document.getElementById('start-btn');
    const startScreen = document.getElementById('start-screen');
    const playScreen = document.getElementById('play-screen');

    let currentWord, correctLetters, wrongGuessCount;

    function startGame() {
        startButton.innerHTML = "Start";
    }

    startButton.addEventListener('click', () => {
        startScreen.style.display = "none";
        playScreen.style.display = "block";
    });
});
