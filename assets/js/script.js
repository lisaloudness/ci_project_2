document.addEventListener("DOMContentLoaded", function () {

    const startButton = document.getElementById('start-btn');
    const startScreen = document.getElementById('start-screen');
    const playScreen = document.getElementById('play-screen');
    const progressBar = document.getElementById('progress-bar');
    const keyboardDiv = document.querySelector('.keyboard');
    const wordDisplay = document.querySelector(".word-display");
    const guessesText = document.querySelector(".guesses-text b");
    const gameModal = document.querySelector(".game-modal");
    const playAgainBtn = document.querySelector(".play-again");

    let currentWord, correctLetters, wrongGuessCount;
    const maxGuesses = 4

    function startGame() {
        startButton.innerHTML = "Start";
    }

    startButton.addEventListener('click', () => {
        startScreen.style.display = "none";
        playScreen.style.display = "block";
        progressBar.style.display = "block";
    });


//Timer Progress Bar//
    function progress(timeleft, timetotal, $element) {
        var progressBarWidth = timeleft * $element.width() / timetotal;
        $element.find('div').animate({ width: progressBarWidth }, 500).html(Math.floor(timeleft / 60) + ":" + timeleft % 60);
        if (timeleft > 0) {
            setTimeout(function () {
                progress(timeleft - 1, timetotal, $element);
            }, 1000);
        }
    };
    progress(122, 122, $('#progressBar'));

    const resetGame = () => {
        correctLetters = [];
        wrongGuessCount = 0;
        guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
        wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
        keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
        gameModal.classList.remove("show");
    };

    // retrieve random question from word-list
    const getRandomWord = () => {
        const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
        currentWord = word;
        console.log(word);
        document.querySelector(".logo").src = hint;
        resetGame();
        wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
    };

    const gameOver = (isVictory) => {
        setTimeout(() => {
            const modalText = isVictory ? `You found the word:` : `The correct word was:`;
            gameModal.querySelector("img").src = `assets/images/${isVictory ? 'victory' : 'lost'}.gif`;
            gameModal.querySelector("h4").innerText = `${isVictory ? 'Well Done!' : 'Unlucky!'}`;
            gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
            gameModal.classList.add("show");
        }, 300);
    };
    const initGame = (button, clickedLetter) => {
        // check if clickedLetter exist on the currentWord    
        if (currentWord.includes(clickedLetter)) {
            //showing correct letters on word display
            [...currentWord].forEach((letter, index) => {
                if (letter === clickedLetter) {
                    correctLetters.push(letter);
                    wordDisplay.querySelectorAll("li")[index].innerText = letter;
                    wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
                }
            });
        } else {
            wrongGuessCount++;
        }
        button.disabled = true;
        guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

        // gameOver function if these conditions meets
        if (wrongGuessCount === maxGuesses) return gameOver(false);
        if (correctLetters.length === currentWord.length) return gameOver(true);
    };



    // create dynamic keyboard buttons and click event listener
    for (let i = 97; i <= 122; i++) {
        const button = document.createElement("button");
        button.innerText = String.fromCharCode(i);
        keyboardDiv.appendChild(button);
        button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
    }
    getRandomWord();
    playAgainBtn.addEventListener("click", getRandomWord);

});