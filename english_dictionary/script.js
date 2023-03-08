const inputEl = document.getElementById("input");
const titleEl = document.getElementById("title");
const containerEl = document.getElementById("meaning-container");
const meaningEl = document.getElementById("meaning");
var audioEl = document.getElementById("audio");

const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

async function getMeaning(word) {
  try {
    const result = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    ).then((res) => res.json());

    const meaning = result[0]["meanings"][0]["definitions"][0]["definition"];
    const audio = result[0]["phonetics"][0]["audio"];
    containerEl.style.display = "block";
    titleEl.innerText = word;
    meaningEl.innerText = meaning;
    audioEl.src = audio;
  } catch (error) {
    console.log(error);
    console.error(error.message);
  }
}

inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    const inputWord = e.target.value;
    // const result = getMeaning(inputWord);
    // console.log(result);
    getMeaning(inputWord);
  }
});
