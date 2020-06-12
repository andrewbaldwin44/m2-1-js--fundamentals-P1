// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q5
// Fix this program
// It should output all of the odd numbers between 1 and 25 (including 1 and 25)

for (let number = 1; number < 25; number++) {
  if (number % 2 != 0) {
    console.log(number);
  }
}
