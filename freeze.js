
//Keys, values, entries, delete, seal, freeze


const bottle = { color: 'green', price: 100, isCleaned: true, capacity: '1kg' };

const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);
const pair = Object.entries(bottle);
console.log(pair);


const twoDimensionArray = [
    ['color', 'green'],
    ['price', 100],
    ['isCleaned', true],
    ['capacity', '1kg']
];