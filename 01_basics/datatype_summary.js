// Premitive

// 7 Types: String,Boolearn,Number,Null,Undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outTemp = null//empty not zero
let Undef ="" //undefiend

const id = Symbol('123')
const anotherId=Symbol('123')
console.log(id === anotherId);
 
const BigNumber = 12333454457767568587678667885344234n





// Non-peritive {Refereance Type}

//Types:- Array,Objects,Functions

/*Array*/const heros = ["Ironman", "hulk", "thor"];     
/*OBjects*/
let obj =
{
    name:"Pradyumna",
    age:22,

}
 /*Functions*/
//  IN javascript we treat function ass veriable
//  const myFunction=function () {
//     console.log("Hello World");
//  }

// console.log(typeof outTemp);
 

//*******************************************/


// Stack (Permitive) , Heap (Non-Primitive)
 
let myYoutubeName = "the gangster"
let anotherName = myYoutubeName
anotherName="chaiaurcode"
console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
    email: "xyz@123.com" ,  
    upiId:"pratik"

}
let userTwo = userOne
userOne.email = "hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);