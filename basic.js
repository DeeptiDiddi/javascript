a = 'Hello World!';
console.log(a) //output: Hello World!

console.log("my name is Deepti") //output: my name is Deepti

//var-----------------------(value and same variable can be re assigned)
var b = "playing"
console.log(b) //output: playing
var b = "singing"
console.log(b) //output: singing


//let-------------------------(value can be re assigned but same variable cannot be re declared)
let c = "dancing"
console.log(c); //output: dancing
//value re assigned
c = "primary"
console.log(c); //output: primary

//const-------------------------(value cannot be re assigned and same variable cannot be re declared)
const d = "reading"
console.log(d); //output: reading
//value re assigned
//d = "writing" //Uncaught TypeError: Assignment to constant variable.
//console.log(d); //output: TypeError: Assignment to constant variable.

//data types in javascript
//1. primitive data types
//a. string
var a = 'HI'
var name = "Deepti"
console.log(typeof name); //output: string
//b. number
console.log(10, 20, 30); //output: 10 20 30
var num = 10
console.log(typeof num); //output: number
//c. boolean
test = 10 > 20;
console.log(test); //output: false
var isAdult = true
console.log(typeof isAdult);
//output: boolean
//d. null
var sample = null;
console.log(sample); //output: null
console.log(typeof sample); //output: object
//e. undefined
let age;
console.log(age); //output: undefined
var undef = undefined;
console.log(typeof undef); //output: undefined


//2. non-primitive data types
//a. object
var person = {
 name: "Deepti",
 age: 25
}
console.log(person); //output: {name: 'Deepti', age: 25}
//b. array
let fruits = ["mango", "banana", "grapes", 55, { name: "yellow" }]
console.log(fruits); //output:(5) ['mango', 'banana', 'grapes', 55, {…}]
console.log(fruits[2]); //output: grapes
var colors = ["red", "green", "blue"]
console.log(colors);
console.log(colors[0]); //output: red

//webpage output
document.write('<br>this is a javascript</br>')//sting
document.write(1, 2, 3)//number
document.write("<h1><br> THIS IS HEADING TEXT</br> </h1>")//string

//Arthemetic operators
//addition
var a = 30;
var b = 25;
document.write("<br>Result: " + (a + b));
//subtraction
document.write("<br>Result: " + (a - b));
//multiplication
document.write("<br>Result:" + (a * b));
//division
document.write("<br>Result:" + (a / b));
//modulus
document.write("<br>Result:" + (a % b));
//increment 
var a = 30;
a++
var b = 25;
b++
document.write("<br>Result:", +a)
document.write("<br>Result:", +b)
//decrement
var a = 30;
a--
var b = 25;
b--
document.write("<br>Result:", +a)
document.write("<br>Result:", +b)