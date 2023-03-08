const btnEl = document.getElementById("btn");
const contentEl = document.getElementById("content");

const limit = 1;
const options = {
  headers: {
    "X-Api-Key": "FpYYN/JIGi1lIt+JKOLnwg==rS2fJBedO0NI1ZtG",
  },
};
const api_url = `https://api.api-ninjas.com/v1/dadjokes?limit=${limit}`;

async function jokeContent() {
  try {
    btnEl.innerText = "Loading";
    // btnEl.ariaDisabled = true;
    contentEl.innerText = "Loading";
    const res = await fetch(api_url, options).then((res) => res.json());
    const jokes = res[0]["joke"];
    // console.log(jokes);
    contentEl.innerText = jokes;
    // btnEl.ariaDisabled = false;
    btnEl.innerText = "TELL ME A JOKE";
  } catch (error) {
    btnEl.ariaDisabled = false;
    console.log(error);
  }
}

btnEl.addEventListener("click", jokeContent);
