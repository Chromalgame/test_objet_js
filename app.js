// element = create_element("100px", "100px", "#f1f1f1", 5, 0);
// document.querySelector("body").appendChild(element);
// const spell = document.getElementsByName(".spell");

// var spell_check = "damage";

// element.addEventListener("mouseup", () => {
//   element.style.background = element.background;
// });

// element.addEventListener("mousedown", () => {
//   if (spell_check == "health") {
//     element.health = element.health + 1;
//     element.style.background = "green";
//   } else if (spell_check == "damage") {
//     element.health = element.health - 1;
//     element.style.background = "red";
//   }

//   if (element.health == 0 || element.health < 0) {
//     element.style.display = "none";
//   }

//   console.log(element.health);
// });

// element.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
// });

// function getSpell_check(this_radio) {
//   spell_check = this_radio.value;
// }

// function create_element(width, height, color, health, armor) {
//   element = document.createElement("div");
//   element.className = "element";

//   element.style.width = width;
//   element.style.height = height;
//   element.style.background = color;

//   element.width = width;
//   element.height = height;
//   element.background = color;
//   element.health = health;
//   element.armor = armor;

//   return element;
// }

import {player} from "./script.js";

const div = document.createElement('div');
div.className = `${player.getName()}`;
div.style.position = `absolute`;
div.style.backgroundImage = `url(${player.getSkin()})`;
div.style.backgroundSize = `cover`;
div.style.width = `50px`;
div.style.height = `50px`;

document.querySelector('body').appendChild(div);

document.addEventListener('keydown', logKey);

function logKey(e) {
  const px_move = 10;
  if(e.code == 'ArrowUp'){
    div.style.top = `${div.offsetTop - px_move}px`;
  }
  if(e.code == 'ArrowDown'){
    div.style.top = `${div.offsetTop + px_move}px`;
  }
  if(e.code == 'ArrowLeft'){
    div.style.left = `${div.offsetLeft - px_move}px`;
  }
  if(e.code == 'ArrowRight'){
    div.style.left = `${div.offsetLeft + px_move}px`;
  }
}