//LOGICAL OPERATOR
//1,LOGICAL NOT '!'
//Logical AND '&&'
//Logical OR '||'

//Logical AND '&&'
var x = 100;
var y = 50;
var z = 200;
if (x == y && y < z) {
 document.write("yes correct")
}
else {
 document.write("<br>wrong")
}


var x = 100;
var y = 50;
var z = 200;
if (x == y && y < z) {
 document.write("<br>yes correct")
}
else if ((x + y) < z) {
 document.write("<br>colour is printed")
}
else {
 document.write("wrong")
}

//Logical OR '||'
var x = 100;
var y = 50;
var z = 200;
if ((x == y) || (y < z)) {
 document.write("<br>z is greater than all")
}
else {
 document.write("wrong")
}
//LOGICAL NOT '!'
var x = 100;
var y = 50;
var z = 200;
if ((x != y) && (y < z)) {
 document.write("<br>REd colour")
}
else {
 document.write("wrong")
}

//TENARY OPERATOR
//condition+true?"true statement":"defaault statement"
document.write(
 2 + 3 == 5 ? "<br>yes correct" : "wrong"
)


var x = 100;
var y = 50;
x < y ? document.write("<br>green") : document.write("<br>red")