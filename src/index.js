const prompt = require('prompt-promise');

let Forestory = require('./forestory/forestory');

let forestory = new Forestory(true);
const Tree = require('./grove/trees') 

let tree = [
    new Tree('Birch', 1, 35),
    new Tree('Linden', 1, 40),
    new Tree('Oak', 1, 50),
    new Tree('Maple', 1, 30),
    new Tree('Birch', 0.5, 33),
    new Tree('Linden', 0.5, 30),
    new Tree('Oak', 0.5, 45),
    new Tree('Maple', 0.5, 32),
];

let ctree = [
    new Tree('Spruce', 0.5, 35),
    new Tree('Pine', 0.5, 40),
    new Tree('Spruce', 1, 50),
    new Tree('Pine', 1, 30),
];

forestory.addDeciduousWood(tree);
forestory.addConifersWood(ctree);

(async () => {
    const age = await prompt(' Enter age: ');
    const maxHeight = await prompt(' Enter max height: ');
    const choose = await prompt(' Enter tree type: 1 if you want deciduous and 2 if conifers ');
    const tree = forestory.heightFilter(maxHeight, choose);
    tree.addYear(+age);
    console.log(tree.toString());
})();