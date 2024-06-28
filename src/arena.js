const Player = require('./player');
const Dice = require('./dice');

class Arena {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  fight() {
    let attacker = this.player1.health <= this.player2.health ? this.player1 : this.player2;
    let defender = attacker === this.player1 ? this.player2 : this.player1;

    while (attacker.isAlive() && defender.isAlive()) {
      this.attack(attacker, defender);
      [attacker, defender] = [defender, attacker];
    }

    const winner = attacker.isAlive() ? attacker : defender;
    console.log(`${winner.name} wins the fight!`);
  }

  attack(attacker, defender) {
    const attackRoll = Dice.roll();
    const defendRoll = Dice.roll();
    const attackDamage = attacker.attack * attackRoll;
    const defendDamage = defender.strength * defendRoll;
    const damageDealt = Math.max(0, attackDamage - defendDamage);

    defender.takeDamage(damageDealt);
    console.log(`${attacker.name} attacks ${defender.name} for ${damageDealt} damage. ${defender.name} health is now ${defender.health}.`);
  }
}

module.exports = Arena;
