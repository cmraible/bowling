class FizzBuzz {

    list = [];

    count(n) {
        for(let i=1; i<n+1; i++) {
            if(this.isFizz(i) && this.isBuzz(i)) {
                this.list.push('FizzBuzz');
            } else if(this.isFizz(i)) {
                this.list.push('Fizz');
            } else if (this.isBuzz(i)) {
                this.list.push('Buzz');
            } else {
                this.list.push(i.toString());
            }
        }
        return this.list;
    }

    isFizz(n) {
        return n%3 == 0;
    }

    isBuzz(n) {
        return n%5 == 0;
    }
}

module.exports = FizzBuzz