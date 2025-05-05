//console.log(`Hello`);
//console.log(`I like pizza!`);

//window.alert(`This is an alert!`);
//window.alert(`I like pizza!`);

// document.getElementById("myH1").textContent = `Hello`;
// document.getElementById("myP").textContent = `I like pizza!`;

// This is a comment

/*
    This
    is
    a
    comment
*/

// variable = A container that stores a value.
//             Behaves as if it were the value it contains.

// 1. declaration   let x;
// 2. assignment    x = 100;

// let fullName = "Hardik Marlapudi";
// let age = 20;
// let isStudent = true;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// let firstName = "Hardik";
// let favoriteFood = "Pizza";
// let email = "hardik123@gmail.com";

// let online = false;
// let forSale = true;
// let isStudent = false;

//console.log(`Hardik is online: ${online}`);
//console.log(`Is this car for sale: ${forSale}`);
//console.log(`Enrolled: ${isStudent}`);

// console.log(typeof firstName);
// console.log(`Your name is ${firstName}`);
// console.log(`Your favorite food is ${favoriteFood}`);
// console.log(`Your email is ${email}`);
// console.log(`You are ${age} years old`);
// console.log(`The price is $${price}`);
// console.log(`Your GPA is ${gpa}`);


// arithmetic operators = operands (values, variables, etc.)
//                        operators(+ - * /)
//                        ex. 11 = x + 5;

// let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
//let extraStudents = students % 3;

// students += 3;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;

//students++;
//students--;

//console.log(students);

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
*/

// let result = 0.0486875;

//console.log(result);

// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

// let username;

// username = window.prompt("What's your name?");
// console.log(username);

// let username;

// username = window.prompt("What's your username?");

// console.log(username);

// let username;

/* document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello, ${username}`;
}
*/

// type conversion = change the datatype of a value to another
//                   (strings, numbers, booleans)

// let age = window.prompt("How old are you?");

// age+=1;

// console.log(age, typeof age);

//let x;
//let y;
//let z;

//x = Number(x);
//y = String (y);
//z = Boolean(z);

//console.log(x, typeof x);
//console.log(y, typeof y);
//console.log(z, typeof z);

// const = A variable that can't be changed

// const PI = 3.14159;
// let radius;
// let circumference;

/*
document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}
*/

// COUNTER PROGRAM

/*
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}
*/

// Math = built-in object that provides a
//        collection of properties and methods

// let x = 3;
// let y = 2;
// let z = 1;

//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(x, y);
//z = Math.sqrt(x);
//z = Math.log();
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x);
//z = Math.sign(x);
// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);

// console.log(min);

// RANDOM NUMBER GENERATOR

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}
