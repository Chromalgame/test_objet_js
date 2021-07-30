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

const div_content_player = document.createElement('div');
div_content_player.className = `${player.getName()}`;
div_content_player.style.position = `absolute`;
div_content_player.style.width = `7%`;
div_content_player.style.height = `auto`;
div_content_player.style.display = `flex`;
div_content_player.style.flexDirection = `column`;

const div_player = document.createElement('div');
div_player.position = 'relative';
div_player.style.backgroundSize = `cover`;
div_player.style.width = `100%`;
div_player.style.height = `auto`;

const div_player_skin = document.createElement('img');
div_player_skin.src = `${player.getSkin()}`;
div_player_skin.position = 'absolute';
div_player_skin.style.top = '0';
div_player_skin.style.left = '0';
div_player_skin.style.width = '100%';
div_player_skin.style.marginTop = '5%';

const div_nom = document.createElement('div');
div_nom.style.backgroundSize = `cover`;
div_nom.style.fontSize = '15px';
div_nom.style.color = "#f1f1f1";
div_nom.style.width = `100%`;
div_nom.style.textAlign = `center`;
div_nom.innerText = player.getName();

document.querySelector('body').appendChild(div_content_player);
div_content_player.appendChild(div_nom);
div_content_player.appendChild(div_player);
div_player.appendChild(div_player_skin);

document.addEventListener('keydown', logKey);

function logKey(e) {
  const px_move = 10;
  if(e.code == 'ArrowUp'){
    div_content_player.style.top = `${div_content_player.offsetTop - px_move}px`;
  }
  if(e.code == 'ArrowDown'){
    div_content_player.style.top = `${div_content_player.offsetTop + px_move}px`;
  }
  if(e.code == 'ArrowLeft'){
    div_content_player.style.left = `${div_content_player.offsetLeft - px_move}px`;
  }
  if(e.code == 'ArrowRight'){
    div_content_player.style.left = `${div_content_player.offsetLeft + px_move}px`;
  }
}