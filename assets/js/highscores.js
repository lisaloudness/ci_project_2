//
document.addEventListener("DOMContentLoaded", function () {
   const score = parseInt(localStorage.getItem('score')) || 0;
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScores.push(score);
highScores.sort((a, b) => b - a);
const top5Scores = highScores.slice(0, 5); //keep only top 5 scores
localStorage.setItem('highScores', JSON.stringify(top5Scores));

function displayHighScores() {
    const highScoresList = document.getElementById("highScoresList");
    highScoresList.innerHTML = '';  //Clear previous high scores
    //Display the top 5 high scores
    top5Scores.forEach((score, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `#${index + 1}: ${score}`;
        highScoresList.appendChild(listItem);

    });
}
    displayHighScores();
    console.log("score", score);
    console.log("highScores", highScores);


console.log(score);
});