
// const TinderUSer=new Object(); this is singelton object

const tinderUser={} //non-singelton object 


tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser =
{
    email: "hemanshu123@gmail.com",
    fullname:{
         userfullname:{
                    name:"dayno",
                    lastname:"marathe",// this is similer like nested objects ,object inside the objects
                    age:13
         }
    }
}
// console.log(regularUser.fullname.userfullname.lastname) //console.log(regularUser.fullname?.userfullname.lastname) optional chaining concepts 
console.log(regularUser)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

//const obj3={obj1,obj2}
//const obj3 = Object.assign({},obj1, obj2) //combin the two object in singel object
    
const obj3    = {...obj1,...obj2}//using spred (...) oprators
console.log(obj3);

const users=[
    {
        id:1,
        email:"hdfc123@gmail.com"  
    },                                                      
    {
        id:2,
        email:"rbi123@gmail.com"  
    }
]

users[1].email

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedoff'));//it was ask question  there given property are exsist or not 


// ***********************D-Strucharing In Objects******* ************

const course = {
    coursename: "js in hindi",
    price: "999",
    coursInstructor:"hitesh"
}

//course.coursInstructor

const { coursInstructor:ipo} = course;
console.log(ipo);



// ****************************About littel bit API
 
/*JSON object*/
/*in json structure are similer to object struchture and key and value are in a string format*/ 
 {
    "any":
 }