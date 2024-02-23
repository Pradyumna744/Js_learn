const marvel=["hulk","ironmna","thor"]
const dc=["superman","batman","wonder women"];

// marvel.push(dc)
// console.log(marvel);

// marvel.concat(dc)
// console.log(marvel);

// const disney = marvel.concat(dc);
// console.log(disney  );

// const all_new_heros = [...marvel, ...dc] //Spred Oprator ist similer like concat function
// console.log(all_new_heros); 

const another_array=[1,2,3,[4,5,6],7,[8,9]];
const real_another_array= another_array.flat(Infinity); //flat method are ues in array
console.log(real_another_array);



console.log(Array.isArray("hemanshu"))
console.log(Array.from("vivek"))

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1, score2, score3));
