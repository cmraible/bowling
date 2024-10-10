const assert = require('node:assert');
const FizzBuzz = require('./FizzBuzz');
const { before } = require('mocha');

describe('FizzBuzz', () => {
    let fizzBuzz;
    beforeEach(() => {
        fizzBuzz = new FizzBuzz();
    });


    it('Testing count 1-5', () => {
        let list = fizzBuzz.count(5);
        assert.deepEqual(list, ['1', '2', 'Fizz', '4', 'Buzz']);
    });

});