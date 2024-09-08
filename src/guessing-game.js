class GuessingGame {
    constructor() {
        this.isFirstTime = true;
    }

    setRange(min, max) {
        if (this.isFirstTime) {
            this.min = min;
            this.max = max;
        }
    }

    guess() {
        return Math.round(this.min + (this.max - this.min) / 2)
    }

    lower() {
        this.max = Math.round(this.min + (this.max - this.min) / 2)
    }

    greater() {
        this.min = Math.round(this.min + (this.max - this.min) / 2)
    }
}

module.exports = GuessingGame;
