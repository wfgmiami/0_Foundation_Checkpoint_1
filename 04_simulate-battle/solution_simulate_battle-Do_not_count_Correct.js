function Pokemon(name, health, attackBonus){
	this.name = name;
	this.health = health;
	this.attackBonus = attackBonus;
}

Pokemon.prototype.biteAttack = function(){
	return this.attackBonus + 2;
}

Pokemon.prototype.isDefeated = function(){
	if (this.health >= 1)
		return false;
	else
		return true;
}

function simulateBattle(pokeA, pokeB, attacker){

	while(pokeA.health > 0 && pokeB.health > 0){
		if (attacker == pokeA.name){
			pokeB.health -= pokeA.biteAttack();
			attacker = pokeB.name;
		}else{
			pokeA.health -= pokeB.biteAttack();
			attacker = pokeA.name;
		}
	}

	return pokeA.health <= 0 ? pokeB.name + " Wins!" : pokeA.name + " Wins!";
}

/*
Nice work on the constructor and prototype methods. 

isDefeated can be written more efficiently:

Pokemon.prototype.isDefeated = function(){ 
    return this.health <= 0; 
};

I know it took you longer than the time alloted to solve, but good job with simulateBattle. Good logic in the while loop, nice use of a ternary operator at the end.

One suggestion: instead of checking for pokeA.health > 0 etc., use pokeA.isDefeated();


*/
