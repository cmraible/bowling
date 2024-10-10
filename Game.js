class Game {
    rolls = [];
    currentRoll = 0;

    roll = (pins) => {
        this.rolls[this.currentRoll++] = pins;
        return;
    }

    score = () => {
        let score = 0;
        let frameIndex = 0;
        for (let frame = 0; frame < 10; frame++) {
            if (this.isSpare(frameIndex)) {
                // spare
                score += 10 + this.rolls[frameIndex+2];
                frameIndex += 2;
            } else {
                score += this.rolls[frameIndex] + this.rolls[frameIndex+1];
                frameIndex += 2;
            }
        }
        return score;
    }

    isSpare = (frameIndex) => {
        return this.rolls[frameIndex] + this.rolls[frameIndex+1] == 10;
    }

}

module.exports = Game;