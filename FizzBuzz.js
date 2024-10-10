class FizzBuzz {

    list = [];

    count(n) {
        for(let i=0; i<n; i++) {
            this.list[i] = i+1; 
        }
        return this.list;
    }
}

module.exports = FizzBuzz