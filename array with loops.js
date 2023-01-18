//for loops
let num = [1, 2, 3, 4];

for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}
//for each loops
num.forEach((element) => {
  console.log(element * element);
});
// array from
let name = "anjum";
let a = Array.from(name);
console.log(a);
//array for...of
for (let i of num) {
  console.log(i);
}
//array for in

for (let items in num) {
  console.log(items);
}
