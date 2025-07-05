
//Window Objectrepresents an ope window in a browser .it is a browser's object (not java script)& is automatically created by a bowser.
//it is a object with lots of properties & methods;
console.log(window);
window.console.log("hello");

//What is DOM?
//We use console.dir(to access objects);
console.dir(document.body);


//DOM Manipulation;

//Selecting with Id
//getElementById("id name");
let intro= document.getElementById("heading");
console.dir(intro)

//Selecting with class
//documnet.getElementByClassName("myclass")
let headings= document.getElementsByClassName("heading");
console.dir(headings);

//Selecting with tags
//getElementsByTagName
let paragraph=document.getElementsByTagName("p");
console.dir(paragraph);


//Query Selector
//document.querySelector("myId/mytag/myClass")
//returns first Elements
let elements=document.querySelector("p");
console.dir(elements);
//returns all nodelist
let Allelements=document.querySelectorAll("p");
console.dir(Allelements);

let elements2=document.querySelector(".heading");
console.dir(elements2);

let elements3=document.querySelector("#myId");
console.dir(elements3);

//properties
//1.tagName: returns tags for element nodes
//'YourTagName'.tagName

//2.Innertext:Returns the Text context of teh Elements and all it's children
//returns the inner text content of all elements and children
let div=document.querySelector("div");
console.dir(div)
//Homework
console.dir(document.body.firstChild);

//InnerHTML
//Returns the plain text or HTML contents in the elements

//text Conetents
//Returns Textual content even from hidden elements
















