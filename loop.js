// Loop through an object using for in, for of, object entries

//for of can used Array 

const numbers = [25, 15, 40, 30, 50, 60];
for (const number of numbers) {
    console.log(number);
}


//For of can not be used with objects.
const bottle = { name: 'lal Mia', color: 'sadhaPakhi' }



//Object can used for in ..

for (const keys in bottle) {
    const values = bottle[keys];
    console.log(keys, values);
}