// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q7
// Write a loop that will output every hour of the day (0 to 23) and
// determine whether it is time to sleep, eat or train.
// Life in the army is regimented! These are the hours alloted to each activity.
// Sleep between 22h and 5h
// Eat at 7h, 13h and 18h
// The rest of the time is spent training.

// The output should look something like
// It's 11h. Time to train!
// It's 12h. Time to train!
// It's 13h. Time to eat!
const SLEEP = [22, 23, 1, 2, 3, 4, 5];
const EAT = [7, 13, 18];

for (let i = 0; i <= 23; i++) {
  let output = (activity) => console.log(`It's ${i}h. Time to ${activity}`);

  if (SLEEP.includes(i)) output('sleep');
  else if (EAT.includes(i)) output('eat');
  else output('train');
}
