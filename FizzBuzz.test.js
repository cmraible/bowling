const assert = require('node:assert');
const FizzBuzz = require('./FizzBuzz');
const { before } = require('mocha');

describe('FizzBuzz', () => {
    let fizzBuzz;
    beforeEach(() => {
        fizzBuzz = new FizzBuzz();
    });

    it('Should return Fizz for numbers divisible by 3', () => {
        let value = fizzBuzz.isFizz(3);
        assert.strictEqual(value, true);
    });

    it('Should not return Fizz for numbers not divisible by 3', () => {
        let value = fizzBuzz.isFizz(4);
        assert.strictEqual(value, false);
    });

    it('Should return Buzz for numbers divisible by 5', () => {
        let value = fizzBuzz.isBuzz(5);
        assert.strictEqual(value, true);
    });

    it('Should not return Buzz for numbers not divisible by 5', () => {
        let value = fizzBuzz.isBuzz(4);
        assert.strictEqual(value, false);
    });

    it('Should return FizzBuzz for numbers divisible by both 3 and 5', () => {
        let list = fizzBuzz.count(20);
        assert.strictEqual(list[0], '1');
        assert.strictEqual(list[1], '2');
        assert.strictEqual(list[2], 'Fizz');
        assert.strictEqual(list[3], '4');
        assert.strictEqual(list[4], 'Buzz');
        assert.strictEqual(list[14], 'FizzBuzz');
    });

});