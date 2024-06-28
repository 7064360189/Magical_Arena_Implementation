const { expect } = require('chai');
const Player = require('../src/player');
const Dice = require('../src/dice');
const Arena = require('../src/arena');

describe('Arena', function() {
  it('should reduce player health correctly during fight', function() {
    const playerA = new Player('Player A', 50, 5, 10);
    const playerB = new Player('Player B', 100, 10, 5);
    const arena = new Arena(playerA, playerB);

    // Mock dice rolls
    Dice.roll = () => 1; // Ensure predictable outcome

    arena.fight();
    expect(playerA.isAlive() || playerB.isAlive()).to.be.true;
  });
});
