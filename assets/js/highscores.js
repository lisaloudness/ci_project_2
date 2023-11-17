document.addEventListener("DOMContentLoaded", function () {
   const score = localStorage.getItem('score');
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScores.push(score);
highScores.sort((a, b) => b - a);
localStorage.setItem('highScores', JSON.stringify(highScores));

function displayHighScores() {
    const highScoresList = document.getElementById("highScoresList");
    highScoresList.innerHTML = '';  //Clear previous high scores
    //Display the high scores
    highScores.forEach((score, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `#${index + 1}: ${score}`;
        highScoresList.appendChild(listItem);

    });

    displayHighScores();
    console.log("score", score);
    console.log("highScores", highScores);

}
console.log(score);
});