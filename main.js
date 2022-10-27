import "./sass/style.css";
import VanillaTilt from "vanilla-tilt";

let card = document.querySelector(".card");
let isIgnite = true;
function changeCardBg(event) {
  card = event.currentTarget;
  const background = isIgnite
    ? card.classList.add("ignite")
    : card.classList.remove("ignite");
  isIgnite = !isIgnite;
  // card.style.background = `url(../public/${background}.svg)`;
  // card.setAttribute("style", `background: url(./public/${background}.svg)`);
}
card.addEventListener("click", changeCardBg);

VanillaTilt.init(card, {
  max: 20,
  speed: 100,
  perspective: 800,
});
const img = document.querySelector(".card > img");
VanillaTilt.init(img, {
  perspective: 1000,
});
