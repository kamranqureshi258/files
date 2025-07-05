/*Functions in JavaScript
Block of code that perfomsa specific task, can be invoked whenever needed
Functions are reusable blocks of code that perform a specific task.
They can take inputs (parameters) and return outputs (return values).
Functions help in organizing code, making it more readable and maintainable.*/

// Function Declaration
//Function FunctionName(parameter1, parameter2, ...) {
//      Function body
function greet(name) {
    console.log("Hello, " + name + "!");
}
// Function Call
//FunctionName(arguments);
greet("Kamran"); // Output: Hello, Kamran!

//Function to find sum of two numbers
function Sum(a,b){
    //These variables are local to the function
   let result; // Local variable to store the result
   result=a+b;
   return result;  
}
 let val=Sum(5, 10); // Output: Sum of 5 and 10 is: 15
 console.log(val);

//arrow Functions
// Arrow functions are a more concise way to write functions in JavaScript.
const add = (x, y) => {
    return x + y;
};
//Multiplication using arrow function
const multiply = (x, y) =>{
     console.log("Multiplication:", x * y); // Output: Multiplication: 125
     return x * y;
    } 
 multiply(5,25);

 //Homework
 // Create a Function using the "Function" Keyword that takes a string as an argument & returns the number fof vowels in the string 
 function keyword(a,e,i,o,u){
         let vowels = [a, e, i, o, u];
         let count = 0;
         for (let j = 0; j < vowels.length; j++) {
             if (vowels[j] === 'a' || vowels[j] === 'e' || vowels[j] === 'i' || vowels[j] === 'o' || vowels[j] === 'u') {
                 count++;
             }
         }
         return count;
     }
 let result = keyword('a', 'e', 'i', 'o', 'u');
console.log("Number of vowels:", result); // Output: Number of vowels: 5

//
const KeyWord=(a,e,i,o,u)=>{
        let Vowels = [a, e, i, o, u];
        let Count = 0;
        for (let i = 0; i < Vowels.length; i++) {
            if (Vowels[i] === 'a' || Vowels[i] === 'e' || Vowels[i] === 'i' || Vowels[i] === 'o' || Vowels[i] === 'u') {
                Count++;
            }
        }
        return Count;
    }
let result2 = KeyWord('a', 'e', 'i', 'o', 'u');
console.log("Kamran Qureshi:", result2); // Output: Number of vowels: 5

//For Each Loop in Arrays
/*arr.foreach(callBackFunction);
Callback Function:here it is a Function to excute for each element in the array
*A call back function passed as an argument to another function*.
These are also called as Higher order functions:These are functions that take other functions as parameters or return another function as result*/

let arr=[0,1,2,3.,4];
arr.forEach((val)=>
{
    console.log("Square of each Number:"+val*val);
})

//Some more Arrays
/*map 
Creates an Array with the results of some operation. the value its callback returns are used to foorm new array*/
let NewArray=arr.map((val)=>{
    return val*val;
})
console.log(NewArray);

//Filter
//Creates an Array of elements that give true  for a condition/Filter.
//Example:only even Numbers
let Newarr=arr.filter((val=>{
    return val%2===0;
}))
console.log(Newarr);

//Reduce
//Performs some Operations & reduces the array to single value.It  returns that single vaalue.
let arr2=[1,2,3,4]
const output=arr2.reduce((prev,curr)=>{
    return prev + curr;
});
console.log(output);//10

//Homework
//
let studentsmarks=[85,96,90,92,67,94];
const newArray2=studentsmarks.filter((val)=>{
    return val>=90
}
    );
console.log(newArray2);

//
let input=prompt("Input a number");
let data=[];

for(let i=0;i <=input;i++){
    data[i-1]=i;
}
console.log(data);

let sum=data.reduce((prev,curr)=>{
    return prev + curr
})
console.log("Sum of Numbers:"+sum);

let product =data.reduce((res,curr)=>
{return res*curr
})
console.log("product:"+product);