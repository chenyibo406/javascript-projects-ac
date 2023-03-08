const containerEl = document.getElementById("container");
const btnEl = document.getElementById("btn");
// const ratingEl = document.getElementById("rating");
let getAllEmoji = document.querySelectorAll(".rating");

let selectedRating = "";

function removeActive() {
  getAllEmoji.forEach((emoji) => {
    emoji.classList.remove("active");
  });
}

getAllEmoji.forEach((emoji) => {
  emoji.addEventListener("click", (event) => {
    removeActive();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

// getAllEmoji.forEach((emoji) => {
//   emoji.addEventListener("click", function () {
//     removeActive();
//     emoji.classList.add("active");
//   });
// });

function feedbackContent() {
  console.log("Thank you");
  containerEl.innerHTML = `<strong>Thank you</strong>
  <br>
  <br>
  <strong>Feedback: ${selectedRating}</strong>
  <p>We'll use your feedback to improve our customer support.</p>
  `;
}

btnEl.addEventListener("click", function () {
  if (selectedRating !== "") {
    feedbackContent();
  }
});

// function emojiActive() {
//   console.log("say hello");
// }
