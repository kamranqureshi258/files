console.log("hello world");
// operators
// Arithmetic Operators: +, -, *, /, %
let a = 10;
let b = 5;
console.log("Addition:", a + b); // 15
console.log("Subtraction:", a - b); // 5
console.log("Multiplication:", a * b); // 50
console.log("Division:", a / b); // 2
console.log("Modulus:", a % b); // 0
console.log("Exponentiation:", a ** 2); // 100 (10 raised to the power of 2)

// Assignment Operators: =, +=, -=, *=, /=, %=
// Unary operators

let x = 20;

//post increment
x++; // x = x + 1
console.log("After x++:", x); // 26 increment
//pre increment
++x; // x = x + 1
console.log("After ++x:", x); // 27 increment

// post decrement
x--; // x = x - 1
console.log("After x--:", x); // 14 decrement
// pre decrement
--x; // x = x - 1
console.log("After --x:", x); // 13 decrement

// Compound Assignment Operators: +=, -=, *=, /=, %=
// These operators combine assignment with arithmetic operations
console.log("Compound Assignment Operators:");

x += 5; // x = x + 5
console.log("After += 5:", x); // 25 increment

x -= 10; // x = x - 10
console.log("After -= 10:", x); // 15 decrement

x *= 2; // x = x * 2
console.log("After *= 2:", x); // 30 multiplication

x /= 3; // x = x / 3
console.log("After /= 3:", x); // 10 division

x %= 4; // x = x % 4
console.log("After %= 4:", x); // 2 modulus

x **= 5 // x = x ** 5
console.log("After x**= 5:", x); // 32 exponentiation

// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
console.log("Comparison Operators:");
console.log("Is a equal to b?", a = b);//false
console.log("Is a strictly equal to b?", a === b); // false ,this checks both value and type//


console.log("Is a not equal to b?", a != b); // true    
console.log("Is a strictly not equal to b?", a !== b);

console.log("Is a greater than b?", a > b); // true
console.log("Is a less than b?", a < b); // false

console.log("Is a greater than or equal to b?", a >= b); // true
console.log("Is a less than or equal to b?", a <= b); // false`

// Logical Operators: &&, ||, !
console.log("Logical Operators:");
let condition1 = true;
let condition2 = false;
console.log("condition1 && condition2:", condition1 && condition2); // false
console.log("condition1 || condition2:", condition1 || condition2); // true
console.log("!condition1:", !condition1); // false
console.log("!condition2:", !condition2); // true
/*These logical operatos are same as NOT GATE,AND GATE,OR GATE in digital electronics*/

//Conditional statements:
// if, else if, else
let age = 20;
if (age < 18) {
    console.log("You are a minor.");
}
else {
    console.log("You are an adult.");
}

// Ternary Operator: condition ? exprIfTrue : exprIfFalse
let isAdult = (age >= 18) ? "You are an adult." : "You are a minor.";
console.log(isAdult);

//Homework
/*Qs.1 Get user to input a number usin prompt (Enter a number) . Check if the number is amultiple of 5 or not
to send a message to the website we use alert()*/
// let num=prompt("Enter a number")
// if(num %5 === 0){
//     console.log("This is a multiple of 5")
// }
// else{
//     console.log("This is not a multiple of 5")
// }
// Write a code which can give grades to students according to their marks
let marks = prompt("Enter your marks (0-100):");
if(marks>=0 && marks<=49){
    console.log("You got F grade");
}
else if(marks>=50 && marks<=59){
    console.log("You got D grade");
}
else if(marks>=60 && marks<=69){
    console.log("You got C grade"); 
}
else if(marks>=70 && marks<=79){
    console.log("You got B grade");
}
else if(marks>=80 && marks<=100){
    console.log("You got A grade");
}
