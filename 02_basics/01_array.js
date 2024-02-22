//**************Array****************
const Arry1 = [0,1, 2, 3, 4, 5]
const Arry2 = ["Iron man","hulk","captian America"]
const Arry3 = new Array(1,2,3,4);
// console.log(Arry1[0])
// console.log(Arry3[3]);

// *******************Array Method**********

// Arry1.push(6)
// Arry1.push(7)
// Arry1.pop( );//remove last element of array

// Arry1.unshift(8)
// Arry1.shift();

// console.log(Arry1.includes(9));
// console.log(Arry1.indexOf(-1));

// const newArr = Arry1.join();
// console.log(Arry1)
// console.log( newArr);


//*****Slice ,splice **********

console.log("A", Arry1);

const n1 = Arry1.slice(1, 3);
console.log(n1);
console.log("B", Arry1);

const n2 = Arry1.splice(1, 3);
console.log(n2);
console.log("C", Arry1);

