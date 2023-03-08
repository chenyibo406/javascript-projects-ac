const apiURL = "https://api.quotable.io/random";
const quoteIdEl = document.getElementById("quote");
const btnIdEl = document.getElementById("btn");
const authorEl = document.getElementById("author");

async function fetchAPI() {
  try {
    btnIdEl.innerText = "Loading...";
    btnIdEl.disabled = true;
    quoteIdEl.innerText = "Updating...";
    authorEl.innerText = "Updating...";
    const result = await fetch(apiURL).then((res) => res.json());
    const author = await result.author;
    const quote = await result.content;
    quoteIdEl.innerHTML = `<i class="fa-sharp fa-solid fa-quote-left"></i> ${quote}  <i class="fa-sharp fa-solid fa-quote-right"></i>`;
    authorEl.innerText = `~ ${author}`;
    btnIdEl.innerText = "Get a quote";
    btnIdEl.disabled = false;
  } catch (error) {
    console.log(error);
    quoteIdEl.innerText = "An error happened, try again later";
    authorEl.innerText = "An error happened";
    btnIdEl.innerText = "Get a quote";
    btnIdEl.disabled = false;
  }
}

btnIdEl.addEventListener("click", () => {
  fetchAPI();
});
