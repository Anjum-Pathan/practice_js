// for max used method are 8
//1. toUpperCase()
let name = "Anjum";
console.log(name.toUpperCase());
//2.toLowerCase()
let Name = "IFFAT";
console.log(Name.toLowerCase());
//3. length
let nam = "anjum";
console.log(nam.length);
//4.slice
let num = "12345";
console.log(num.slice(2, 5));

//5.slice()
let num1 = "12345";
console.log(num1.slice(4));
//6.replce
let Nam = "anjum";
console.log(Nam.replace("anjum", "iffat"));
//7.concate()
let Name1 = "iffat";
let Name2 = "princess";
console.log(Name1.concat("\t is my \t" + Name2));
//8.trim()
let cute = "     Iffat      ";
console.log(cute.trim());
// use a for loop for string
let frnd = "sohail";
for (let i = 0; i < frnd.length; i++) {
  console.log(frnd[i]);
}
//practice question on string
//Q.1what will be the following priint in js? ans :4
let eg = "nar";
console.log("nar'".length);
//Q.2 Explore with includes
const question1 = "what is your age?";
const word = "my age";
console.log(question1.includes(word));
// Q3 extract the amount out of this string "please give rs 1000"
let stn = "please give rs 1000";
let amount = Number.parseInt(stn.slice(15));
console.log(amount);

// Q4 try to change 4t character of a given string" were you able to do it?"
//Ans :string is immutable string  becoz existing string not able to change.
