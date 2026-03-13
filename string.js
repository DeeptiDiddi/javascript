//spilt()
document.write("<br><h3>spilt()</h3>")
var sample = "this is a string"
document.write("<br>original string: " + sample.split(" "))

//trim
document.write("<br><h3>trim()</h3>")
var str = "   hello world   "
document.write(str.trim())

//charAt()
document.write("<br><h3>charAt()</h3>")
var student = "ramesh";
document.write(student.charAt(4))
//substring()
document.write("<br><h3>substring()</h3>")
var text = "javascript is fun"
document.write("<br>original string: " + text)
document.write("<br>substring: " + text.substring(0, 10))

//toUpperCase() and toLowerCase()
document.write("<br><h3>toUpperCase() and toLowerCase()</h3>")
var name = "deEPti"
document.write("<br>original string: " + name)
document.write("<br>uppercase: " + name.toUpperCase())
document.write("<br>lowercase: " + name.toLowerCase())

//includes()
document.write("<br><h3>includes()</h3>")
var sentence = "javascript is a programming language"
document.write("<br>original string: " + sentence)
document.write("<br>includes 'programming': " + sentence.includes("programming"))
document.write("<br>includes 'python': " + sentence.includes("python"))

//replace()  
document.write("<br><h3>replace()</h3>")
var message = "hello world"
document.write("<br>original string: " + message)
var newMessage = message.replace("world", "javascript")
document.write("<br>replaced string: " + newMessage)