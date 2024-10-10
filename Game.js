class Game {

    totalScore = 0;

    roll = (pins) => {
        this.totalScore += pins;
        return;
    }

    score = () => {
        return this.totalScore;
    }

}

module.exports = Game;