
document.write("<br><h3>push()")
//push()
let sports = ["cricket", "football"]
document.write("<br>before push: " + sports)
sports.push("socker", 68)
document.write("<br>after push: " + sports)


document.write("<br><h3>pop()</h3>")
//pop()
let sports1 = ["cricket", "football", "socker", 68]
let a = sports1.pop()
document.write("<br>after pop: " + sports1)
document.write("<br>removed element: " + a)

document.write("<br><h3>shift()</h3>")
//shift()
let states = ["gujarat", "rajasthan", "maharashtra", "punjab"]
document.write("<br>before shift: " + states)
let b = states.shift()
document.write("<br>after shift: " + states)
document.write("<br>removed element: " + b)

document.write("<br><h3>unshift()</h3>")
//unshift()
let scores = [22, 3, 44, 5, 54, "deepti"]
scores.unshift("deepti", 20)
document.write("<br>after unshift: " + scores)
document.write("<br>length of scores: " + scores.length)


document.write("<br><h3>concat()</h3>")
//concat()
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [7, 8, 9]
let combined = arr1.concat(arr2, arr3)
document.write("<br>combined array: " + combined)


document.write("<br><h3>join()</h3>")
//join()
let fruits = ["apple", "banana", "orange", "grapes", "guava"]
let joined = fruits.join(" - ")
document.write("<br>joined string: " + joined)

document.write("<br><h3>slice()</h3>")
//slice()  
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sliced = numbers.slice(2, 5)
document.write("<br>original array: " + numbers)
document.write("<br>sliced array: " + sliced)

document.write("<br><h3>splice()</h3>")

//splice()
//remove elements
let animals = [1, 2, "cat", "dog", "rabbit", "hamster", "parrot"]
document.write("<br>before splice: " + animals)
let removed = animals.splice(0, 2)
document.write("<br>after splice: " + animals)
document.write("<br>removed elements: " + removed)

document.write("<br><h4>add()</h4>")
//add elements
let colors = ["red", "green", "blue", "yellow"]
document.write("<br>before splice: " + colors)
colors.splice(2, 0, "orange", "purple")
document.write("<br>after splice: " + colors)

document.write("<br><h4>replacing()</h4>")
//replacing elements
let mynumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let mynew = mynumbers.splice(3, 4, 10, 11, 12)
document.write("<br>after splice: " + mynumbers)
document.write("<br>removed elements: " + mynew)

let num = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let n = num.splice(0, 4, "something")
document.write("<br>after splice: " + num)
document.write("<br>removed elements: " + n)


let nu = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let m = nu.splice(4, 1, "something")
document.write("<br>after splice: " + nu)
document.write("<br>removed elements: " + m)

document.write("<br><h3>indexOf()</h3>")
let names = ["deepti", "sneha", "priya", "neha", "sneha"]
names.indexOf("sneha")
document.write("<br>index of 'priya': " + names.indexOf("priya"))
document.write("<br>index of 'neha': " + names.indexOf("neha"))
document.write("<br>index of 'abc': " + names.indexOf("abc"))

let st = ["anil", "bunti", "suresh"]
var newstudent = st.indexOf("<br>satish")
if (newstudent === -1) {
 st.push("satish")
}

document.write("</br>" + st)

document.write("<br><h3>foreach()</h3>")
//foreach
let t = ["suresh", "murali", "nagaraju", "satish"]
t.forEach(function (value, index) {
 document.write("<br>index: " + index + " value: " + value)
})

//multidimensional array
document.write("<br><h3>multidimensiondsal()</h3>")
let marks = [
 [
  ["anil", "amar", "anothony"], ["banty", "bably", "bhanu"]
 ],
 [10, 20, 30], [40, 50, 60, 70], [80, 90]
 [100, 110, 120, 140]

]
document.write("<br>result: " + marks[0][0][1])

//multidimensional array using loop
for (let i = 0; i < marks.length; i++) {
 for (let j = 0; j < marks[i].length; j++) {
  for (let k = 0; k < marks[i][j].length; k++) {
   document.write("<br>result: " + marks[i][j][k])
  }
 }
} 
