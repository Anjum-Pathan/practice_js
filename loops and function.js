// Q.1 write a program to print the marks of a student in an object using for loop
let marks = { harry: 98, rohan: 70, aakash: 7 };
//for loops
/*for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The Marks of" +
      Object.keys(marks)[i] +
      "are" +
      marks[Object.keys(marks)[i]]
  );
}
//Q.2 same question but using for in loops
for (let key in marks) {
  console.log("marks of " + key + "are" + marks[key]);
}*/
//Q.3 write programe to print  try again until the user enter the correct num.
let cn = 77;
let i;
while (i != cn) {
  console.log("try agin");
  i = prom("enter a correct number");
}
console.log("you enter correct num");
// Q.4 find out mean for 4 num using function
function mean(a, b, c, d) {
  return (a + b + c + d) / 4;
}
console.log(mean(3 + 2 + 5 + 1));
