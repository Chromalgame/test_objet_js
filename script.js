import Player from "./class/player.js";
import Spell from "./class/spell.js";

/*********************** SPELL ***********************/
// Offensif
const fire = new Spell("Fire", -10, 10, 1, 1);
const ice = new Spell("Ice", -10, 10, 1, 1);
const storm = new Spell("Strom", -10, 10, 1, 1);
const rock = new Spell("Rock", -10, 10, 1, 1);

// Défensif
const heal = new Spell("Heal", +10, 10, 1, 1);

console.log(``);

console.log(`----- SPELL -----`);
console.log(`Name : ${fire.getName()}`);
console.log(`Damage : ${fire.getDamage()}`);
console.log(`Mana_Cost : ${fire.getMana_Cost()}`);
console.log(`CoolDown : ${fire.getCooldown()}`);
console.log(`LVL : ${fire.getLVL()}`);

console.log(``);

console.log(`Name : ${ice.getName()}`);
console.log(`Damage : ${ice.getDamage()}`);
console.log(`Mana_Cost : ${ice.getMana_Cost()}`);
console.log(`CoolDown : ${ice.getCooldown()}`);
console.log(`LVL : ${ice.getLVL()}`);

console.log(``);

console.log(`Name : ${storm.getName()}`);
console.log(`Damage : ${storm.getDamage()}`);
console.log(`Mana_Cost : ${storm.getMana_Cost()}`);
console.log(`CoolDown : ${storm.getCooldown()}`);
console.log(`LVL : ${storm.getLVL()}`);

console.log(``);

console.log(`Name : ${rock.getName()}`);
console.log(`Damage : ${rock.getDamage()}`);
console.log(`Mana_Cost : ${rock.getMana_Cost()}`);
console.log(`CoolDown : ${rock.getCooldown()}`);
console.log(`LVL : ${rock.getLVL()}`);

console.log(``);

console.log(`Name : ${heal.getName()}`);
console.log(`Damage : ${heal.getDamage()}`);
console.log(`Mana_Cost : ${heal.getMana_Cost()}`);
console.log(`CoolDown : ${heal.getCooldown()}`);
console.log(`LVL : ${heal.getLVL()}`);

/********************** PLAYER **********************/

export const player = new Player("Chromal", "resource/chevalier.png",100, 100, 100, 1);

player.addSpell(fire);
player.addSpell(ice);
player.addSpell(storm);
player.addSpell(rock);
player.addSpell(heal);player.addSpell(heal);

console.log(`---- PLAYER ----`);
console.log(`Name : ${player.getName()}`);
console.log(`Skin : ${player.getSkin()}`);
console.log(`Health : ${player.getHealth()}`);
console.log(`Armor : ${player.getArmor()}`);
console.log(`Mana : ${player.getMana_Count()}`);
console.log(`LVL : ${player.getLVL()}`);
console.log(`Spell :`);
player.getSpell().forEach((spell) => {console.log(" - ", spell.getName());})
