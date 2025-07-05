//Loops and strings
//for loop
//for loop with a string,A string consists of intialiazed characters,stopping condition,updation 
     
// for (let count=1; count <= 5; count++) {
//     console.log("Count is: " + count);
// }
// console.log("Loop finished!");
 
//calculating sum of 'n' natural numbers using for loop
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum += i; // sum = sum + i
// }
// console.log("Sum of first 5 natural numbers is: " ,sum);

//infinte loop
// for (let i = 1; i <= 5; i--) {   
//     console.log("This will run forever!");
// }
// console.log("This will never be printed!");

//while loop
// let i = 1;  
// while (i <= 5) { // stopping condition
//     // Loop body or code block
//     console.log("Count is: " + i);
//     i++; // Incrementing i
// }
//     console.log("Count is: " + i);

// console.log("Loop finished!");

//Do while loop
// let j = 6;
// do {
//     console.log("Count is: " + j);
//     j++; // Incrementing j
// }
// while (j <= 5); // Stopping condition
// console.log("Loop finished!");  

// //for of loop used for iterating over iterable objects like arrays, strings, etc.``
// const fruits = ["apple", "banana", "cherry"];
// for (const fruit of fruits) {
//     console.log("Fruit: " + fruit);
// }
//for in loop used for iterating over object properties

// const person = {
//     name: "Daanish",
//     age: 17,
//     isStudent: true
// };
// for (const key in person) {
//     console.log(key + ": " + person[key]);
// }
//Homework
// Print even numbers from 1 to 100 using a for loop
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }}

//Create a game where you start with any random game number and keep guessing the number until you get it right.
// let gamenum = 25;

// let usernum = prompt("Guess the game number");
// while(usernum !=  gamenum){
//    usernum= prompt("Your Guess is wrong ,guess again:");
// }
// console.log("Congratulations you have guessed the Number");

//String manipulation
let str = "Hello, World!";
// Accessing characters in a string
console.log("First character: " + str[0]); // H
console.log("Last character: " + str[11]); // !
    // String length
    console.log("Length of the string: " + str.length); // 13
    //Template literals
    let specialString = `This is a string with special characters: ${str}`;
    console.log(specialString); // This is a string with special characters: Hello, World
/*Template lterals allow you to embed expressions inside a string using backticks (`) and ${expression} syntax.
You can also use template literals to create multi-line strings without needing to use escape characters for new lines.
*/  
// Escape characters
let escapedString = "This is a string with a newline character\nand a tab character\tand a backslash \\";
console.log(escapedString);

// String methods
// toUpperCase() and toLowerCase().These are built -in functions that can be used to change the case of a string.
let upperCaseString = str.toUpperCase();
let lowerCaseString = str.toLowerCase();
console.log("Uppercase: " + upperCaseString); // HELLO, WORLD!
console.log("Lowercase: " + lowerCaseString); // hello, world!

let trimmedString = "   Hello, World!   ".trim(); // Removes whitespace from both ends
console.log("Trimmed string: '" + trimmedString + "'"); // 'Hello, World!'

let str2=("1234567");
console.log("Gives a Sliced part of the string :"+str2.slice(0,4)); // true
// slice() method extracts a section of a string and returns it as a new string, without modifying the original string and the last value is non inclusive.

// String concatenation
let str3 = "Goodbye, ";
let concatenatedString = str + str3; // Concatenates two strings
console.log("Concatenated string: " + concatenatedString); // Goodbye, Hello, World!

// String Replacement
let replacedString = str.replace("World", "Universe"); // Replaces "World" with "Universe"
                    //str.replace(Searchval, Replaceval);
// Note: replace() only replaces the first occurrence unless a global regex is used.
console.log("Replaced string: " + replacedString); // Hello, Universe!

// String search
let searchString = "World";
console.log(searchString.charAt(0)); // W

//Practice Question
//Qs.1. Prompt the user toentter their FullName. Generate a username for them based on the input.Start username with @,Followed by their full name and ending with fullname lenght.

let input= prompt("Enter your Full Name:");
let username = "@"+input+input.length;
if (input) {
    alert("Your generated username is: " + username);
}
