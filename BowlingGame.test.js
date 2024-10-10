const assert = require('node:assert');
const Game = require('./Game');
const { before } = require('mocha');

describe('BowlingGame', () => {
    let game;
    before(() => {
        game = new Game();
    });

    function rollMany(n, pins) {
        for (let i=0; i<n; i++) {
            game.roll(pins);
        }
    }

    it('Tesing zero scores', () => {
        const n = 20;
        const pins = 0;
        
        rollMany(n,pins);
        assert.strictEqual(game.score(),0);
    });

    it('Tesing one scores', () => {
        const n = 20;
        const pins = 1;
        
        rollMany(n,pins);
        assert.strictEqual(game.score(),20);
    });
});