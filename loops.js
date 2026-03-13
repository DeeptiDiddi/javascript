//for,while,do-while,for each
//for loop
for (var a = 0; a < 10; a++) {
 document.write("i love india" + "<br>")
}

//with index
for (var a = 0; a < 10; a++) {
 document.write(a + ")" + "i love india" + "<br>")
}

for (var a = 10; a > 1; a--) {
 document.write(a + ")" + "i love india" + "<br>")
}
//while
let x = 0;
while (x <= 3) {
 document.write(x + ")" + "hello" + "<br>")
 x++
}
//do-while loop
let y = 0;
do {
 document.write("this" + "<br>")
 y++
} while (y > 5)

let c = 0;
do {
 document.write(c + ")" + "deepu" + "<br>")
 c++
} while (c < 5)


//real time example

var amount = 100;
var days = 30;
var interest = 2;

for (let i = 1; i <= days; i++) {
 amount += interest;
 document.write("Your amount for day " + i + " is " + amount + "<br>");
}
