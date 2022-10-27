import "./sass/style.css";
import VanillaTilt from "vanilla-tilt";

const card = document.querySelector(".card");
let isIgnite = true;
function changeCardBg(event) {
  const card = event.currentTarget;
  const background = isIgnite ? "explorer-card" : "ignite-card";
  isIgnite = !isIgnite;
  card.style.background = `url(./public/${background}.svg)`;
}
VanillaTilt.init(card, {
  max: 20,
  speed: 100,
  perspective: 800,
});
const img = document.querySelector(".card > img");
VanillaTilt.init(img, {
  perspective: 1000,
});

card.addEventListener("click", changeCardBg);
