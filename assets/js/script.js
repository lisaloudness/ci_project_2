document.addEventListener("DOMContentLoaded", function () {

    const startButton = document.getElementById('start-btn');
    const startScreen = document.getElementById('start-screen');
    const playScreen = document.getElementById('play-screen');
    const progressBar = document.getElementById('progress-bar')

    let currentWord, correctLetters, wrongGuessCount;

    function startGame() {
        startButton.innerHTML = "Start";
    }

    startButton.addEventListener('click', () => {
        startScreen.style.display = "none";
        playScreen.style.display = "block";
        progressBar.style.display = "block";
    });


    function progress(timeleft, timetotal, $element) {
        var progressBarWidth = timeleft * $element.width() / timetotal;
        $element.find('div').animate({ width: progressBarWidth }, 500).html(Math.floor(timeleft / 60) + ":" + timeleft % 60);
        if (timeleft > 0) {
            setTimeout(function () {
                progress(timeleft - 1, timetotal, $element);
            }, 1000);
        }
    };

    progress(120, 120, $('#progressBar'));
});
