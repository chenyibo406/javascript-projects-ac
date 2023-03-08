const API_URL = "https://api.catboys.com/img";

const btnEl = document.getElementById("btn");
const animeEl = document.getElementById("anime-container");
const imgEl = document.getElementById("img");
const nameEl = document.getElementById("anime-name");

async function fetchAPI() {
  try {
    btnEl.ariaDisabled = true;
    btnEl.innerText = "Loading";
    nameEl.innerText = "Updating";
    const res = await fetch(API_URL).then((res) => res.json());
    btnEl.ariaDisabled = false;
    btnEl.innerText = "Get Anime";
    animeEl.style.display = "block";
    const imgURL = res.url;
    const name = res.artist;
    imgEl.src = imgURL;
    nameEl.innerText = name;

    //   console.log(imgURL);
    //   console.log(name);
  } catch (error) {
    btnEl.ariaDisabled = false;
    btnEl.innerText = "Get Anime";
    console.log(error);
  }
}

btnEl.addEventListener("click", () => {
  fetchAPI();
});
