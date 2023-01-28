//Guess the number
let a = Math.random() * 100;
a = Number.parseInt(a);
let chance;
let score = 100;
while (chance != a) {
  score = score - 1;
  chance = prompt("Enter the number between 1to 100");
  if (chance == a) {
    console.log("You guess the correct num");
    console.log(`you guess the correct num in ${100 - score} chances`);
  } else if (chance > a && chance < 100) {
    console.log("your num is greter than guess number");
  } else if (chance < a && chance > 100) {
    console.log("your num is less than guess number");
  } else {
    console.log("Enter the number between 1 to 100");
  }
}
