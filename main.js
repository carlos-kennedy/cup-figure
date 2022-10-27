import "./sass/style.css";
import "./public/explorer-card.svg";
import "./public/ignite-card.svg";
import VanillaTilt from "vanilla-tilt";

const card = document.querySelector(".card");
let isIgnite = false;
function changeCardBg(event) {
  const card = event.currentTarget;
  const background = isIgnite ? "explorer-card" : "ignite-card";
  isIgnite = !isIgnite;
  card.style.background = `url(../public/${background}.svg)`;
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
