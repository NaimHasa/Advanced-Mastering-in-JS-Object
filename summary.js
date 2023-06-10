/*
1-Ways to create Object 
2-Ways to colne Object 
---------------------------
Object Method Property

1-Delete Object Property
2-Object Immutability


*/

// Object clone
const data = { name: 'Sunny', age: 35 };
const dataCopy = data;
// console.log(dataCopy);


/*
Use the spread operator (Shallow Copy)

*/
const students = { name: 'Mohammad Ali', age: 25 }
const dataDuplicate = { ...students };
// console.log(dataDuplicate);


/*
Use JSON parsing(Deep Copy)
*/
/*
Ways to Delete/remove Objcet property
*/

var parson = {
    name: 'John Doe',
    prefix: 'Mr',
    age: 28
}
// delete parson.age;
console.log(parson);





