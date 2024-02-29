

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
    if (username === undefined) /*or if (!username) */
    { 
        console.log("please enter a username");
        return
    }
    return`${username} just logged in`
    
} 
console.log(loginUserMessage());