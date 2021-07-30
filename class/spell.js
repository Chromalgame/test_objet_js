export default class Spell{
    #name;
    #damage;
    #mana_cost;
    #cooldown;
    #lvl;

    constructor(Un_name, Un_damage, Un_mana_cost, Un_cooldown, Un_lvl){
        this.#name = Un_name;
        this.#damage = Un_damage;
        this.#mana_cost = Un_mana_cost;
        this.#cooldown = Un_cooldown;
        this.#lvl = Un_lvl;
    }

    getName(){
        return this.#name;
    }
    getDamage(){
        return this.#damage;
    }
    getMana_Cost(){
        return this.#mana_cost;
    }
    getCooldown(){
        return this.#cooldown;
    }
    getLVL(){
        return this.#lvl;
    }
}
