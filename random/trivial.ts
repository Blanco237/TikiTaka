import Prompt from "prompt-sync";
const input = Prompt();

const SECRET = "money";
let found = false;

console.log(`=======================================`);
console.log(`=============WORD GUESSER==============`);
console.log(`=======================================`);
console.log("\n");

console.log("Your first hint: ", new Array(SECRET.length).fill("_").join(" "), "\n");

while (found === false) {
  let hintArr: Array<string> = [];
  let guess = input("Enter your guess?    ");

  while (guess.length !== SECRET.length) {
    console.log(`Word has ${SECRET.length} letters?`)
    guess = input(`Enter Guess? `);
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

console.log("\n");
console.log(`=======================================`);
console.log(`================CORRECT================`);
console.log(`=======================================`);
console.log("\n");