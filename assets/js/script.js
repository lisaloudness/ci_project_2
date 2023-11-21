document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-btn");
    const startScreen = document.getElementById("start-screen");
    const howButton = document.getElementById("how-btn");
    const closeButton = document.getElementById("close-btn");
    const playScreen = document.getElementById("play-screen");
    const progressBar = document.getElementById("progress-bar");
    const keyboardDiv = document.querySelector(".keyboard");
    const wordDisplay = document.querySelector(".word-display");
    const guessesText = document.querySelector(".guesses-text b");
    const gameModal = document.querySelector(".game-modal");
    const playAgainBtn = document.querySelector(".play-again");
    const scoreText = document.querySelector(".score b");

    let currentWord, correctLetters, wrongGuessCount, score;
    instructions, $, wordList;

    const maxGuesses = 4;

    //Initiate the Game Screen when Start Button is clicked
    startButton.addEventListener("click", () => {
        startScreen.style.display = "none";
        playScreen.style.display = "block";
        progressBar.style.display = "block";

        // Reset overall score to 0
        score = 0;
        scoreText.innerText = score;
        //Reset progress bar
        progress(122, 122, $("#progressBar"));

    });

    //How To Play
    howButton.addEventListener("click", showInstructions); // listen for open click of how to play modal
    closeButton.addEventListener("click", closeInstructions); //listen for close button
    //Show modal when How To Play button is clicked
    function showInstructions() {
        instructions.style.display = "block";
    }
    //Close How To Modal when close button is clicked
    function closeInstructions() {
        instructions.style.display = "none";
    }

    //Timer Progress Bar//
    function progress(timeleft, timetotal, $element) {
        var progressBarWidth = (timeleft * $($element)
            .width()) / timetotal;
        $element
            .find("div")
            .animate({
                width: progressBarWidth
            }, 200)
            .html(Math.floor(timeleft / 60) + ":" + (timeleft % 60));
        if (timeleft > 0) {
            setTimeout(function () {
                progress(timeleft - 1, timetotal, $element);
            }, 1000);
        }
        else {
            onTimeUp();
        };
    };

    function onTimeUp() {
        const timeText = "You Scored:";
        playAgainBtn.style.display = "none";
        gameModal.querySelector("img")
            .src = "assets/images/hourglass.png";
        gameModal.querySelector("h4")
            .innerText = "Time's Up";
        gameModal.querySelector("p")
            .innerText = `${timeText}${score}`;
        gameModal.classList.add("show");
        localStorage.setItem('score', score); //add score to local storage
        //Hide playscreen and show start screen after a delay
        setTimeout(function () {
            playScreen.style.display = "none";
            startScreen.style.display = "block";
            gameModal.style.display = "none";
            progressBar.style.display = "none";
            resetGame();
            window.location.reload();
        }, 3000);
    }

    const resetGame = () => {
        correctLetters = [];
        wrongGuessCount = 0;

        guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
        wordDisplay.innerHTML = currentWord
            .split("")
            .map(() => `<li class="letter"></li>`)
            .join("");
        keyboardDiv
            .querySelectorAll("button")
            .forEach((btn) => (btn.disabled = false));
        gameModal.classList.remove("show");
    };

    // retrieve random question from word-list
    const getRandomWord = () => {
        const {
            word
            , hint
        } =
            wordList[Math.floor(Math.random() * wordList.length)];
        currentWord = word;
        document.querySelector(".logo")
            .src = hint;
        resetGame();
        wordDisplay.innerHTML = word
            .split("")
            .map(() => `<li class="letter"></li>`)
            .join("");
    };

    //Determine if victory or lost modal appear
    const gameOver = (isVictory) => {
        setTimeout(() => {
            const modalText = isVictory ?
                `You found the word:` :
                `The correct word was:`;
            gameModal.querySelector("img")
                .src = `assets/images/${isVictory ? "victory" : "lost"
                }.gif`;
            gameModal.querySelector("h4")
                .innerText = `${isVictory ? "Well Done!" : "Unlucky!"
                }`;
            gameModal.querySelector(
                "p"
            )
                .innerHTML = `${modalText} <b>${currentWord}</b>`;
            gameModal.classList.add("show");
        }, 122);
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
        }
        else {
            wrongGuessCount++;
        }
        button.disabled = true;
        guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

        // gameOver function if these conditions meets
        if (wrongGuessCount === maxGuesses) return gameOver(false);
        if (correctLetters.length === currentWord.length) {
            score = (score || 0) + 1;
            scoreText.innerText = score;
            return gameOver(true);
        }
    };

    // create dynamic keyboard buttons and click event listener
    for (let i = 97; i <= 122; i++) {
        const button = document.createElement("button");
        button.innerText = String.fromCharCode(i);
        keyboardDiv.appendChild(button);
        button.addEventListener("click", (e) =>
            initGame(e.target, String.fromCharCode(i))
        );
    }

    getRandomWord();
    playAgainBtn.addEventListener("click", getRandomWord); //Generate random word when Next button clicked on Modal
});
