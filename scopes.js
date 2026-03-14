//global scope
var Apple = "red";
let orange = "yellow";
const banana = "green"
function fruit() {
 document.write("<br>" + Apple)
 document.write("<br>" + orange)
 document.write("<br>" + banana)
}
fruit();
//local scope or function scope
function car() {
 var brand = "BMW";
 let model = "X5";
 const year = 2020;
 document.write("<br>" + brand)
 document.write("<br>" + model)
 document.write("<br>" + year)
}
car();
//block scope
function block() {
 if (true) {
  var name = "deepti";
  let age = 30;
  const city = "pune";
  document.write("<br>" + name)
  document.write("<br>" + age)
  document.write("<br>" + city)
 }
 document.write("<br>" + name)
}
block();

