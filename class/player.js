export default class Player{
    #name;
    #health;
    #armor;
    #mana_count;
    #lvl;
    #skin;
    #spell_list = [];

    constructor(Un_name, Un_skin,Un_health, Un_armor, Un_mana_count, Un_lvl){
        this.#name = Un_name;
        this.#skin = Un_skin;
        this.#health = Un_health;
        this.#armor = Un_armor;
        this.#mana_count = Un_mana_count;
        this.#lvl = Un_lvl;
    }

    getName(){
        return this.#name;
    }
    getSkin(){
        return this.#skin;
    }
    getHealth(){
        return this.#health;
    }
    getArmor(){
        return this.#armor;
    }
    getMana_Count(){
        return this.#mana_count;
    }
    getLVL(){
        return this.#lvl;
    }
    getSpell(){
        return this.#spell_list;
    }

    addSpell(Un_Spell){
        if(this.#spell_list.includes(Un_Spell)){
            console.log(``);
            console.log(`⚠️⛔️ ${this.getName()} connait déjà '${Un_Spell.getName()}' ⛔️⚠️`);
            console.log(``);
        }else{
            this.#spell_list.push(Un_Spell);
        }
    }
}
