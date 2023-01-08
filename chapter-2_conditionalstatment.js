// chapter2 Q.1
//use logical operatore to find wether the age of persone lies between 10 & 20?

// let age = prompt("what is your age?");
// if (age > 10 && age < 20) {
//   console.log("your age is lies between 10 and 20");
// } else {
//   console.log("your age is doest lies between 10 and 20");
// }
// chapter-2 Q-2 demonstrate switch case stament
/*let age = prompt("what is your age?");
switch (age) {
  case "11":
    console.log("your age is 11");
    break;
  case "12":
    console.log("your age is 12");
    break;
  case "13":
    console.log("your age is 13");
    break;
  default:
    console.log("your age is not special");
}*/

//chapter-2 Q-3 write js programe to fine num is divisible  by 2 & 3
let num = prompt("enter the num:");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
  console.log("number is divisible");
} else {
  console.log("number is not divisible");
}
