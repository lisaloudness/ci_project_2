document.addEventListener("DOMContentLoaded", function () {

    const startButton = document.getElementById('start-btn');
    const startScreen = document.getElementById('start-screen');
    const playScreen = document.getElementById('play-screen');
    const progressBar = document.getElementById('progress-bar');
    const keyboardDiv = document.querySelector('.keyboard');

    let currentWord, correctLetters, wrongGuessCount;

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

    // retrieve random question from word-list;
    const getRandomWord = () => {
        const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
        currentWord = word;
        console.log(word);
        document.querySelector(".logo").src = hint;
    }
 

// create dynamic keyboard buttons and click event listener
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);

    console.log(String.fromCharCode(i));
};


    getRandomWord();
});