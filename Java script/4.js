//Arrays 
// let marks = [85, 90, 78, 92, 88]; // Array of marks
// console.log("Marks:", marks);
//Generally we use arrays to store multiple values of the same type
// console.log(marks.length); // Length of the array

// Accessing elements in an array
// console.log("First mark:", marks[0]); // 85
// console.log("Last mark:", marks[marks.length - 1]); // 88

// Modifying elements in an array
// marks[2] = 80; // Changing the third element
// console.log("Updated marks:", marks); // [85, 90, 80, 92, 88]

//looping through an array
// for (let i = 0; i < marks.length; i++) {  
//     console.log("Mark at index " + i + ":", marks[i]);
// }
// Using for of loop to iterate through the array
// for (const mark of marks) {
//     console.log("Mark:", mark);
// }
//we can use methods to change attributes if objects

//Pratice Exercise
//For a given array with marks of students ->[85,97,44,37,76,60].Find the average marks of the students and print the result.
// let studentMarks = [85, 97, 44, 37, 76, 60];
// let totalMarks = 0;
// for (const mark of studentMarks) { 
//     totalMarks += mark; // Adding each mark to totalMarks
// }
// let averageMarks = totalMarks / studentMarks.length; // Calculating average
// console.log("Average Marks of Student:", averageMarks); // Output the average marks

//Qs.2 For a given array with pricesof 5 items -> [250, 645, 300, 900, 50].All itmes have an offer of 10% off.
// Calculate the total price after applying the offer and print the result.
let itemPrices = [250, 645, 300, 900, 50];
let totalPrice = 0;

for (const price of itemPrices) {
    let discountedPrice = price - (price * 0.10); // Applying 10% discount
    totalPrice += discountedPrice; // Adding discounted price to totalPrice
}
console.log("Total Price after 10% discount on all items:", totalPrice); // Output the total price after discount

//Arry methods
// Array methods are built-in functions that allow you to manipulate arrays easily.
// Common array methods include:
// push() - Adds one or more elements to the end of an array.   
let Heroes =["Shang-chi,Wanda","Doctor Strange","Dr.Doom,Wong","Sentri"];
Heroes.push("Fantastic-Four"); // Adding "Fantastic-Four" to the end of the array
console.log("After push:", Heroes); // ["Shang-chi", "Wanda", "Doctor Strange", "Dr.Doom", "Wong", "Sentri", "Fantastic-Four"]

// pop() - Removes the last element from an array and returns it.
let lastHero = Heroes.pop(); // Removing the last element ("Fantastic-Four")    
console.log("After pop:", Heroes); // ["Shang-chi", "Wanda", "Doctor Strange", "Dr.Doom", "Wong", "Sentri"]
console.log("Popped Hero:", lastHero); // "Fantastic-Four"

//tostring() - Converts an array to a string.
let heroesString = Heroes.toString(); // Converts the array to a string
console.log("Array as string:", heroesString); // "Shang-chi,Wanda,Doctor Strange,Dr.Doom,Wong,Sentri"

//Concate() - Joins two or more arrays and returns a new array.
let justiceLeague=["Superman", "Batman","Wonder woman","Aquaman"];
let combinedHeroes = Heroes.concat(justiceLeague); // Combining Heroes and Justice League arrays
console.log("Combined Heroes and Justice League:", combinedHeroes); // ["Shang-chi", "Wanda", "Doctor Strange", "Dr.Doom", "Wong", "Sentri", "Superman", "Batman", "Wonder
//Concat dosen' change the original array, it returns a new array with the combined elements

//Unshift() - Adds one or more elements to the beginning of an array.
Heroes.unshift("Black Widow");  // Adding "Superman" to the beginning of the Heroes array
console.log("After unshift:", Heroes); // ["Black Widow", "Shang-chi", "Wanda", "Doctor Strange", "Dr.Doom", "Wong", "Sentri"]

// Shift() - Removes the first element from an array and returns it.
let firstHero = Heroes.shift(); // Removing the first element ("Black Widow")
console.log("After shift:", Heroes); // ["Shang-chi", "Wanda", "Doctor Strange", "Dr.Doom", "Wong", "Sentri"]
console.log("Shifted Hero:", firstHero); // "Black Widow"

//slice() - Extracts a section of an array and returns it as a new array.
//slice(startIdx,endidx) - startIdx is inclusive, endIndex is exclusive.
// It does not modify the original array.
let slicedHeroes = Heroes.slice(1, 4); // Extracting elements from index 1 to 3 (not including index 4)
console.log("Sliced Heroes:", slicedHeroes); // ["Wanda", "Doctor Strange", "Dr.Doom"]

// Splice() - Adds or removes elements from an array at a specific index.
// splice(startIdx, deleteCount, item1, item2, ...) - startIdx is the index to start at, deleteCount is the number of elements to remove,
Heroes.splice(2, 1, "Hulk"); // At index 2, remove 1 element and add "Hulk"
console.log("After splice:", Heroes); // ["Shang-chi", "Wanda", "Hulk", "Dr.Doom", "Wong", "Sentri"]

//Practice Question


let Companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

//1.Remove a company from the aray

Companies.splice(2, 1); // Removing "Uber" from the array
console.log("After removing a company:", Companies); // ["Bloomberg", "Microsoft", "Google", "IBM", "Netflix"]
//Remove Uber & add Ola in it's place
Companies.splice(2, 0, "Ola"); // Adding "Ola" at index 2 without removing any element
console.log("After adding Ola:", Companies); // ["Bloomberg", "Microsoft", "Ola", "Google", "IBM", "Netflix"]

//3.Add Amazon at the end of the array
Companies.push("Amazon"); // Adding "Amazon" to the end of the array
console.log("After adding Amazon:", Companies); // ["Bloomberg", "Microsoft", "Ola", "Google", "IBM", "Netflix", "Amazon"]

