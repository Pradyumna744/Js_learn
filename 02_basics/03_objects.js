//SingleTons
//Object create


//object literals / or object delcalration

const mySym = Symbol["key1"]

const JsUser = {
"full name":"pradyumna Marathe",
    name:"Hitesh", //key and values are important
    [mySym]:"myKey1",
    age: 23,
    location: "pune",
    email:"abc123@gmail.com",
    isLoggedIn: false,
    lastLogin:["monday","saturday"]
}


// Q.how to access to object?
        //type of accessing object
    
// console.log(JsUser.email)
console.log(JsUser["email"]);
console.log( JsUser[mySym])
console.log(JsUser["full name"]);

// Overwriteing of Values