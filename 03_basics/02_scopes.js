
// let c = 300;
// let a = 300;
// if (true) { 
//     let a = 10;
//     const b = 20;
//     console.log("inner",a);
    
// }
/*in the scopes there is limits*/  
// console.log(a);
// console.log(b);
// console.log(c);


function one()
{
    /*the js code  was excute line by line and inside 
    the resources can't be accessed by the parent function  child can access the values of its parents   */
   
   
   /* const username = "mayur"
    
    function two() {
   
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two();
}


one()

*/


// same thing was happend with if else statements  
if(true)
{

    const username="hituu"
    if(username==="hitu")
    {
        const website ="youtube"
        console.log(username+website);
    }
    console.log(website)
}
// console.log(username);

// IMP concept
addone(5);
function addone(num){
    return num+1;

}

// there two diffrent type of function declearing and accessing there elements
addTwo(5)
const addTwo=function(num)
{
    return num+2;
}