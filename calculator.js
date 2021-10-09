function Calculator() {
    this._result = null;
    this.getLastResult = () => this._result;
    this.sum = (a, b) => {
        this._result = a + b;
        console.log(`Sum of ${a} and ${b} equals ${this._result}`)
        return this._result;
    }
    this.minus = (a,b) => {
        this._result = a - b;
        console.log(`${a} minus ${b} equals ${this._result}`)
        return this._result;
    }
    this.multiplication = (a,b) => {
        this._result = a * b;
        console.log(`${a} multiply ${b} equals ${this._result}`)
        return this._result;
    }
    this.divide = (a,b) => {
        this._result = a / b;
        console.log(`${a} divide ${b} equals ${this._result}`)
        return this._result;
    }
}

module.exports = Calculator; //для доступа извне