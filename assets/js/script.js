const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");

let currentWord; wrongGuessCount = 0;
const maxGuesses = 6;

// retrieve random question from word-list
const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    console.log(word);
    document.querySelector(".logo-box").src = hint;
    wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
}

const initGame = (button, clickedLetter) => {
// check if clickedLetter exist on the currentWord    
  if(currentWord.includes(clickedLetter)) {
    [...currentWord].forEach((letter, index) => {
        if(letter === clickedLetter) {
            wordDisplay.querySelectorAll("li")[index].innerText = letter;
            wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
        }
    })
  } else {
    wrongGuessCount++;
  }
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
  }


// create dynamic keyboard buttons and click event listener
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}
getRandomWord();