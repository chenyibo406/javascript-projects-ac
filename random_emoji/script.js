const btnEl = document.getElementById("btn");
const emojiContent = document.getElementById("emoji-content");

const emoji = [];

const EMOJI_API =
  "https://emoji-api.com/emojis?access_key=a05a859ff20895070c95444d24adf2f1705be12d";

async function fetchAPI() {
  const data = await fetch(EMOJI_API).then((res) => res.json());
  console.log(data);

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

fetchAPI();

btnEl.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  btnEl.innerText = emoji[randomNum].emojiName;
  emojiContent.innerText = emoji[randomNum].emojiCode;
});

// fetchAPI();
