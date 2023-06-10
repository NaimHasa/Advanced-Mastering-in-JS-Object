// (advanced) Compare objects, referential integrity

// simple compare 

/*
const first = 5;
const second = 5;

*/
/*
const first = { a: 5 };
const second = { a: 5 };

if (first === second) {
    console.log('They are same')
} else {
    console.log('Different')
};
*/

//Do not use this method to compare Object or Array.
const first = { a: 15, b: 20, c: 30 };
const second = { a: 15, b: 20, c: 30 };


const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);

if (firstString === secondString) {
    console.log('Same')
}
else {
    console.log('different')
};