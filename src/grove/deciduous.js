const Tree = require('./trees') 

class Deciduous extends Tree {
    constructor(nameTree, age, maxHeight) {
        super(nameTree, age);
        this.maxHeight = maxHeight;
    }
}


module.exports = Deciduous;