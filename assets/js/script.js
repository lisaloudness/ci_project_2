const keyboardDiv = document.querySelector(".keyboard");
const getRandomLogo = () => {
    const { question, answer } = logoList[Math.floor(Math.random() * logoList.length)];
    console.log(question, answer);
}

// dynamic keyboard
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
}
getRandomLogo();