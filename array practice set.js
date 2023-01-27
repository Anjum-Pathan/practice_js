//  create an array of number and  take input from the user to add numbers to this array...
let arr = [1, 2, 3, 6, 10];
let a = prompt("Enter the Num");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);
//keep addig numbers to the array 1 until 0 is added in array.
let ar = [1, 2, 3, 4, 5];
let a1;
do {
  let a1 = prompt("enter the number");
  a1 = Number.parseInt(a1);
  ar.push(a1);
  console.log(ar);
} while (a1 != 0);
//filter from from numbers divisible by 10 from a given array.
let b = [10, 100, 3, 40, 5];
let c = b.filter((x) => {
  return x % 10 == 0;
});
console.log(c);
//create array of square given number
let d = [2, 4, 5, 7, 10, 55];
let e = d.map((x) => {
  return x * x;
});
console.log(e);
//reduce value
let g = [2, 3, 4, 5];
let n = g.reduce((x1, x2) => {
  return x1 * x2;
});
console.log(n);
