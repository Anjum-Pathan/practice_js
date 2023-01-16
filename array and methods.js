//methods
//1.tostring()
let num = [1, 2, 3, 4, 5, 6];
let b = num.toString();
console.log(b);
//2.join
let numb = [1, 2, 3, 4];
let c = numb.join("-");
console.log(c);
//push
let numbe = [1, 2, 3, 4];
numbe.push(7);
console.log(numbe);
//pop()
numbe.pop();
console.log(numbe);
//shift()
numbe.shift();
console.log(numbe);
//unshift()
numbe.unshift(3);
console.log(numbe);
//delete()
delete [0];
//concat
let a = [1, 2, 3, 4];
let e = [2, 3, 4, 5];
let d = a.concat(e);
console.log(d);
//sort
let z = [11, 1, 14];
z.sort();
console.log(z);
//reverse
z.reverse();
//slice
let m = [1, 4, 5, 6];
m.splice(1, 2, 12, 13);
console.log(m);
//splice
m.splice(2, 3);
console.log(m);
