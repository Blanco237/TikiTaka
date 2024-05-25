import Prompt from "prompt-sync";
const input = Prompt();

// Get User Input
// Check if input matches word
// Check matching characters
// Check matching positions
// Print Hint
const SECRET = "money";
let found = false;
let tries = 5;

console.log(`=======================================`);
console.log(`=============WORD GUESSER==============`);
console.log(`=======================================`);
console.log("\n");

console.log("Your first hint: ", new Array(SECRET.length).fill("_").join(" "));

while (found === false) {
  if (tries === 0) {
    found = true;
    continue;
  }
  let hintArr: Array<string> = [];
  let guess = input("Enter your guess?    ");

  while (guess.length !== SECRET.length) {
    guess = input(`Word has ${SECRET.length} letters?\n Enter Guess?  `);
  }
  if (guess.toLowerCase() === SECRET) {
    found = true;
    continue;
  }

  for (let idx = 0; idx < guess.length; idx++) {
    const char = guess[idx];
    if (SECRET.includes(char)) {
      if (char === SECRET[idx]) {
        hintArr.push(char.toUpperCase());
      } else {
        hintArr.push(char.toLowerCase());
      }
    } else {
      hintArr.push("_");
    }
  }

  console.log("OOPS!!\nWrong Guess \n");
  console.log("Your hint: ", hintArr.join(" "));
}

if (tries === 0) {
  console.log("OOPS!!\nYou ran out of tries \n");
  console.log(`Your Word was ${SECRET}`);
} else {
  console.log("\n");
  console.log(`=======================================`);
  console.log(`================CORRECT================`);
  console.log(`=======================================`);
  console.log("\n");
}
