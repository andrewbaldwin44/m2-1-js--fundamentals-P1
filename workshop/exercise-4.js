// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q4
// Fix this program
// It should output the squares of all numbers between 0 and 12

// eg:
// 0, 1, 4, 9, 16, ...

for (let number = 1; number < 12; number++) {
  let square = Math.pow(number, 2);
  console.log(`the square of ${number} is ${square}`);
}
