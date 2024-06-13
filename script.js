const changingWordElement = document.getElementById("changing-word");
const words = [
  "Html - Css",
  "Git - GitHub",
  "JavaScript",
  "React.js",
  "the frontend",
  "code daily",
  "being a Web Developer",
];
let index = 0;
let intervalId;

function changeWord() {
  index = (index + 1) % words.length;
  changingWordElement.textContent = words[index];
  if (words[index] === "being a Web Developer") {
    clearInterval(intervalId);
  }
}

intervalId = setInterval(changeWord, 1000);