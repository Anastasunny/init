class Forestory {
    constructor(needConifers = false) {
        this.deciduousPool = [];
        if (needConifers) {
            this.conifersPool = [];
        }
    }

    addDeciduous(tree) {
        this.deciduousPool.push(tree)
    }

    addConifers(ctree) {
        if (this.conifersPool) {
            this.conifersPool.push(ctree)
        } else {
            console.log('No conifers needed');
        }
    }

    addDeciduousWood(tree) {
        this.deciduousPool = [...this.deciduousPool, ...tree];
    }

    addConifersWood(ctree) {
        this.conifersPool = [...this.conifersPool, ...ctree];
    }   

    heightFilter(height, choose) {
        if (choose == 1) {
            return this.deciduousPool.find((tree) => tree.getMaxHeight() >= height);
        } else if (choose == 2) {
            return this.conifersPool.find((ctree) => ctree.getMaxHeight() >= height);
        } else {
            return console.log('Enter only 1 or 2'); 
        }
        
    }
}

module.exports = Forestory;