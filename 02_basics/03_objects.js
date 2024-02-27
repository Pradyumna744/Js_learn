// there two type declearing the object
// 1.constructor  2.littral
    
// singleton :- constructor is singalton 

// declearing object

const mySym=Symbol("key1")

const JsUser =
    {

    name: "vikram",
    "full name": "hemanshu mahajan", 
    [mySym]:"mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}


// how to access the object

// console.log(JsUser.email)//with dot opratot
// console.log(JsUser["email"])//with squar brakets 
// console.log(typeof JsUser[mySym]);//access the Symbol
// console.log(JsUser["full name"]);
// console.log(  JsUser.mySym)

// how to change the value of object after declearing

JsUser.email = "hdfc@123togmail.com"  
// console.log(JsUser["email"]);
// Object.freeze(JsUser) //WE freez the object or lock the object value cannot change
JsUser.email = "hdec@123togmail.com"
// console.log(JsUser["email"]);
// console.log(JsUser);


 JsUser.greeting=function() {
        console.log("Hello JS User");    
 }

 JsUser.greetingTwo=function() {
    console.log(`Hello JS User,${this.name}`);    //when you refrence same object that time we uesed  This KeyWord
}
 console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
 
/*NOTE:_ Accessing the Object and there Value with dot(.) Oprator and in some
 cases we uesd the[] bracket there Two Ways Are commanly uesd
    */