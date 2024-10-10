const assert = require('node:assert');
const Game = require('./Game');
const { before } = require('mocha');

describe('BowlingGame', () => {
    let game;
    beforeEach(() => {
        game = new Game();
    });

    function rollMany(n, pins) {
        for (let i=0; i<n; i++) {
            game.roll(pins);
        }
    }
    
    function rollSpare() {
        game.roll(5);
        game.roll(5);
    }

    function rollStrike() {
        game.roll(10);
    }

    it('Tesing zero scores', () => {
        rollMany(20,0);
        assert.strictEqual(game.score(),0);
    });

    it('Tesing one scores', () => {
        rollMany(20, 1);
        assert.strictEqual(game.score(),20);
    });

    it('Testing one spare', () => {
        rollSpare();
        game.roll(3);
        rollMany(17, 0);
        assert.strictEqual(game.score(), 16);
    });

    it('Testing one strike', () => {
        rollStrike();
        game.roll(3);
        game.roll(4);
        rollMany(16, 0);
        assert.strictEqual(game.score(), 24);
    });

    it('Testing perfect game', () => {
        rollMany(12, 10);
        assert.strictEqual(game.score(), 300);
    });

    it('Testing a random game', () => {
        game.roll(5);
        game.roll(2); //7

        rollStrike(); //10 + 10

        rollSpare(); //10 + 3

        game.roll(3);
        game.roll(4); //7

        rollMany(12, 0);
        assert.strictEqual(game.score(), 47);
    });
});