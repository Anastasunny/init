const Tree = require('./trees') 

class Conifers extends Tree {
    constructor(nameCTree, age, maxHeight) {
        super(nameCTree, age);
        this.maxHeight = maxHeight;
    }
}

module.exports = Conifers;