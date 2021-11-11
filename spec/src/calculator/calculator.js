class Calculator {
    constructor(){
    this.result = 0;
    }

    plus(n) {
        this.result = this.result + n;
        return this;
    }

    minus(n) {
        this.result = this.result - n;
        return this;
    }

    multiple(n){
        this.result = this.result * n;
        return this;
    }

    div(n) {
        this.result = this.result / n;
        return this;
    }

    getResult() {
        return this.result;
    }

    multFirst(n){
        this.result = 2;
        this.result = this.result + n * 3;
        return this;
    }

    divFirst(n){
        this.result = 2;
        this.result = this.result + n / 3;
        return this;
    }

    bracketsFirst(){
        this.result = 5;
        this.result = 10 * (this.result + 2);
        return this;
    }

    remainder(n) {
        this.result = 5;
        this.result = this.result / n;
        return this;
    }

    square(n){
        this.result = n * n;
        return this;
    }

    sqrt(n){
        this.result = Math.sqrt(n);
        return this;
    }
}

module.exports = Calculator;