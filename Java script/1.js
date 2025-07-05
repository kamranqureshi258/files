//Chapter Variables and Data Types//

age =17;
money = 100;
a = null;
x= undefined;
isFollow= true;


//Variables are case sensistive//
//example//
Fullname ="Daanish Qureshi";
fullname = "Kamran Qureshi";

//only letters digits,undersore and dollar signs is allowed not even sapce can be given//
//only letters,undersscore(_) and dollar signs($) should be the first letters//
//Reserved keywords canot be used as variables//

//let const and var ://
//var can be redeclared and updated .A global scope variable.//

//let can be updated but not redeclared. a block scope vasriable//
let FULLNAME="KAMRAN QURESHI";
FULLNAME="Daanish Qureshi";

//CONST CAN BE UPDATED NOT REDCLARED.A BLOCK SCOPE VARIABLE//
const PI= 3.14;
//block i.e {} anything inside these braces is a block scope variable//

//Data Types//
//1. Primitive Data types//
//String,Number,Boolean,null,undefined,Symbol,Bigint//

//2. Non-Primitive Data types//
//Object,Array,Function//
//object collection of key value paris//
//generally we declare variables with const//
//example//
const person = {
    name: "Daanish",
    age: 17,
    isStudent: true,
    hobbies: ["reading", "gaming", "coding"],
    address: {
        city: "Hyderabad",
        country: "India"
    }
};

//Accessing object properties//
console.log(person.name); // Daanish
console.log(person.age); // 17
console.log(person.hobbies[0]); // reading
console.log(person.address.city); // Hyderabad

//Adding new property to object//
person.age = person.age + 1; // Incrementing age
console.log(person.age); // 18

//homework//
const product= {
    name:"parker Jotter Standard Ballpoint Pen",
   originalprice: 285 ,
    discount: 5,
    slongan:"deal of the day",
    isAvailable: true,
    views: 7002,
    ratings: 4.5,
    reviews: ["Excellent", "Good quality", "Value for money"],
    seller: {
        name: "Stationery Store",
        location: "Downtown"
    }

}

//homework 2//
const teacher={
    name:"shradhakhapra",
    posts: 195,
    followers: 5960000,
    isVerified: true,
    bio: "Educator, YouTuber, and Entrepreneur",
    workexperience: {
        employer: "ex-microsoft",
        position: "Software Engineer",

    },
    tagline:"the best ball point pen"
}