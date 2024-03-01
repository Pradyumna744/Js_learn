

function MyName()
{
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("D");
    console.log("Y");
    console.log("U");
    console.log("M");
    console.log("N");
    console.log("A");
}

// MyName()

// function addTwoNumbers(Number1, Number2) // parameters
// {
   //     console.log (Number1 + Number2);
// }

function addTwoNumbers(Number1, Number2) // parameters
{
   
    // let result = Number1 + Number2;
    // return result//after  return keyword nothing is exicute in function method or body.
    
    return Number1 + Number2;

}


const result = addTwoNumbers(20, 5);//arguments or passsing value

// console.log("Result",result);

/*anothe example of return */  function loginUserMessage(username) {
    if (username === undefined) /*or if (!username)  */
    { 
        console.log("please enter a username");
        return
    }
    return`${username} just logged in`
    
} 
console.log(loginUserMessage());


/*Shopping Cart function*/

function addCart(...num1) {
    return num1
}

console.log(addCart(100,200,300,400));

/*Objecte pass or use in function*/
/*const user=
{
    username: "vivek",
    price:199
}

     function handelObjeect(anyobject){
        console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
     }

handelObjeect(user)
     */

/*Array pass or use in function*/

const myNewArray = [200, 300, 400, "ABC"]

function returnSecondValue(getArray) {
    return getArray[0]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));