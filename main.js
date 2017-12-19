
const Blockchain = require('./Blockchain');
const Block = require('./Block');

const difficulty = 4;
let myCoin = new Blockchain(difficulty);

console.log('Mining block 1...')
myCoin.addBlock(new Block(1, "10//02/2018", {amount: 4}));
console.log('Mining block 2...')
myCoin.addBlock(new Block(1, "12//04/2018", {amount: 8}));

// myCoin.addBlock(new Block(1, "11//08/2018", {amount: 7}));

// console.log(`Is blockchain valid? ${myCoin.isChainValid()}`);

// console.log('After tempering the amount and recalculating the hash')
// myCoin.chain[1].data = { amount: 100};
// myCoin.chain[1].hash = myCoin.chain[1].calcualteHash();

// console.log(`Is blockchain valid? ${myCoin.isChainValid()}`);