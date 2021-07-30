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

import { player, enemi } from "./script.js";

const div_content_player = document.createElement("div");
const div_player = document.createElement("div");
const div_player_skin = document.createElement("img");
const div_player_nom = document.createElement("div");

const div_content_enemi = document.createElement("div");
const div_enemi = document.createElement("div");
const div_enemi_skin = document.createElement("img");
const div_enemi_nom = document.createElement("div");

const div_mur = document.createElement("div");
div_mur.style.position = "absolute";
div_mur.style.top = "5%";
div_mur.style.left = "50%";
div_mur.style.width = `5%`;
div_mur.style.height = `90%`;
div_mur.style.backgroundColor = `#f1f1f1`;

creer_joueur();
creer_enemi();

document.addEventListener("keydown", logKey);

function logKey(e) {
  const px_move = 10;

  if (e.code == "ArrowUp") {
    div_content_player.style.top = `${
      div_content_player.offsetTop - px_move
    }px`;
    // || div_mur.offsetLeft + div_mur.offsetWidth < div_content_player.offsetLeft
    // div_content_player.offsetLeft + div_content_player.offsetWidth > div_mur.offsetLeft && div_content_player.offsetLeft + div_content_player.offsetWidth < div_mur.offsetLeft + div_mur.offsetWidth || div_content_player.offsetTop + div_content_player.offsetHeight > div_mur.offsetLeft && div_content_player.offsetTop + div_content_player.offsetHeight < div_mur.offsetLeft + div_mur.offsetWidth
    // if (
    //   div_mur.offsetTop + div_mur.offsetHeight >
    //     div_content_player.offsetLeft + div_content_player.offsetWidth &&
    //   div_mur.offsetLeft <
    //     div_content_player.offsetLeft + div_content_player.offsetWidth &&
    //   div_mur.offsetLeft + div_mur.offsetWidth >
    //     div_content_player.offsetLeft + div_content_player.offsetWidth
    // ) {
    //   div_content_player.style.top = `${
    //     div_mur.offsetTop + div_mur.offsetHeight
    //   }px`;
    // }
  }
  if (e.code == "ArrowDown") {
    div_content_player.style.top = `${
      div_content_player.offsetTop + px_move
    }px`;
    // if (
    //   div_content_player.offsetTop + div_content_player.offsetHeight <
    //     div_mur.offsetTop &&
    //   div_content_player.offsetLeft + div_content_player.offsetWidth >
    //     div_mur.offsetLeft
    // ) {
    //   div_content_player.style.top = `${
    //     div_mur.offsetTop - div_content_player.offsetHeight
    //   }px`;
    // }
  }
  if (e.code == "ArrowLeft") {
    div_content_player.style.left = `${
      div_content_player.offsetLeft - px_move
    }px`;
    // if (
    //   div_content_player.offsetTop + div_content_player.offsetHeight <
    //     div_mur.offsetLeft + div_mur.offsetWidth &&
    //   div_content_player.offsetTop + div_content_player.offsetHeight >
    //     div_mur.offsetTop &&
    //   div_content_player.offsetTop < div_mur.offsetHeight + div_mur.offsetTop
    // ) {
    //   div_content_player.style.top = `${
    //     div_mur.offsetTop - div_content_player.offsetHeight
    //   }px`;
    // }
  }
  if (e.code == "ArrowRight") {
    div_content_player.style.left = `${
      div_content_player.offsetLeft + px_move
    }px`;
    // if (
    //   div_content_player.offsetLeft + div_content_player.offsetWidth >
    //     div_mur.offsetLeft &&
    //   div_content_player.offsetTop + div_content_player.offsetHeight >
    //     div_mur.offsetTop &&
    //   div_content_player.offsetTop < div_mur.offsetHeight + div_mur.offsetTop
    // ) {
    //   div_content_player.style.left = `${
    //     div_mur.offsetLeft - div_content_player.offsetWidth
    //   }px`;
    // }
  }
}

function creer_joueur() {
  div_content_player.className = `${player.getName()}`;
  div_content_player.style.position = `absolute`;
  div_content_player.style.width = `7%`;
  div_content_player.style.height = `auto`;
  div_content_player.style.display = `flex`;
  div_content_player.style.flexDirection = `column`;

  div_player.position = "relative";
  div_player.style.backgroundSize = `cover`;
  div_player.style.width = `100%`;
  div_player.style.height = `auto`;

  div_player_skin.src = `${player.getSkin()}`;
  div_player_skin.position = "absolute";
  div_player_skin.style.top = "0";
  div_player_skin.style.left = "0";
  div_player_skin.style.width = "100%";
  div_player_skin.style.marginTop = "5%";

  div_player_nom.style.backgroundSize = `cover`;
  div_player_nom.style.fontSize = "100%";
  div_player_nom.style.color = "#00ABFF";
  div_player_nom.style.width = `100%`;
  div_player_nom.style.textAlign = `center`;
  div_player_nom.innerText = player.getName();

  document.querySelector("body").appendChild(div_content_player);
  document.querySelector("body").appendChild(div_mur);
  div_content_player.appendChild(div_player_nom);
  div_content_player.appendChild(div_player);
  div_player.appendChild(div_player_skin);
}

function creer_enemi() {
  div_content_enemi.className = `${enemi.getName()}`;
  div_content_enemi.style.position = `absolute`;
  div_content_enemi.style.width = `7%`;
  div_content_enemi.style.height = `auto`;
  div_content_enemi.style.display = `flex`;
  div_content_enemi.style.flexDirection = `column`;

  div_enemi.position = "relative";
  div_enemi.style.backgroundSize = `cover`;
  div_enemi.style.width = `100%`;
  div_enemi.style.height = `auto`;

  div_enemi_skin.src = `${enemi.getSkin()}`;
  div_enemi_skin.position = "absolute";
  div_enemi_skin.style.top = "0";
  div_enemi_skin.style.left = "0";
  div_enemi_skin.style.width = "100%";
  div_enemi_skin.style.marginTop = "5%";

  div_enemi_nom.style.backgroundSize = `cover`;
  div_enemi_nom.style.fontSize = "100%";
  div_enemi_nom.style.color = "#FF002B";
  div_enemi_nom.style.width = `100%`;
  div_enemi_nom.style.textAlign = `center`;
  div_enemi_nom.innerText = enemi.getName();

  document.querySelector("body").appendChild(div_content_enemi);
  document.querySelector("body").appendChild(div_mur);
  div_content_enemi.appendChild(div_enemi_nom);
  div_content_enemi.appendChild(div_enemi);
  div_enemi.appendChild(div_enemi_skin);
}