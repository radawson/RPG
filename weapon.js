class Weapon {
    name = "";
    damage = 0;


    getDamage(){
        return this.damage;
    }
    
    getName() {
        return this.name;
    }

    setDamage(number) {
        this.damage = number;
    }

    setName(string){
        this.name = string;
    }
}