//get date
//const toDay = new Date()
//document.write(toDay)
//console.log(new Date());

//get month
//const Day = new Date();
//document.write(Day.getmonth());

//getfull year
const ay = new Date();
document.write(ay.fullyear());
//get hours
const ay1 = new Date();
document.write(ay1.getHours());
//get minutes 
const ay2 = new Date();
document.write(ay2.getMinutes());
//get seconds
const ay3 = new Date();
document.write(ay3.getSeconds());
//get milliseconds
const ay4 = new Date();
document.write(ay4.getMilliseconds());

//setdate
const Da = new Date(10);
Da.setDate(10)

document.write(Da);
//setmonth
const Da1 = new Date(2024, 0, 1);
Da1.setMonth(5)
document.write(Da1);
//setfullyear
const Da2 = new Date(2024, 0, 1);
Da2.setFullYear(2025)
document.write(Da2);
//sethours
const Da3 = new Date(2024, 0, 1, 10);
Da3.setHours(15)
document.write(Da3);
//setminutes
const Da4 = new Date(2024, 0, 1, 10, 30);
Da4.setMinutes(45)
document.write(Da4);
//setseconds
const Da5 = new Date(2024, 0, 1, 10, 30, 20);
Da5.setSeconds(50)
document.write(Da5);
//setmilliseconds  
const Da6 = new Date(2024, 0, 1, 10, 30, 20, 500);
Da6.setMilliseconds(800)
document.write(Da6);

