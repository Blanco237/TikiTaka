import Prompt from "prompt-sync";
import { generate } from "./modules/random-words";

class GameManager {
  private SECRET: string;
  private length: number;
  private secretMap: Map<string, number>;
  private found = false;
  private prompt = Prompt();

  constructor(secret: string) {
    this.SECRET = secret.toLowerCase();
    this.length = secret.length;
    this.secretMap = new Map(
      secret.split("").map((val, pos) => {
        return [val, pos];
      })
    );
  }

  gameInit() {
    console.log(`=======================================`);
    console.log(`=============WORD GUESSER==============`);
    console.log(`=======================================`);
    console.log("\n");
    console.log("The Length of your word is: ", this.length);
  }

  runGameLoop() {
    while (!this.found) {
      const guess = this.getUserGuess();
      if (this.checkEquality(guess.toLowerCase())) {
        this.found = true;
        continue;
      }
      const result = this.getLettersAndPositions(guess.toLowerCase());
      this.printUserHint(result);
    }
    this.printSuccess();
  }

  private getUserGuess() {
    let word = this.prompt("What is your guess?  ");
    while (word.length !== this.length) {
      console.log("\nInvalid length for guess");
      word = this.prompt("Try Again: ");
    }
    return word.toLowerCase();
  }

  private checkEquality(guess: string) {
    return this.SECRET === guess;
  }

  private getLettersAndPositions(guess: string) {
    const guessMap = new Map(
      guess.split("").map((val, pos) => {
        return [val, pos];
      })
    );
    const resultMap = new Map<
      string,
      { ex_correct: boolean; pos_correct: boolean }
    >();
    for (let [val, pos] of guessMap) {
      if (this.secretMap.get(val) !== undefined) {
        if (this.secretMap.get(val) === pos) {
          resultMap.set(val, { ex_correct: true, pos_correct: true });
        } else {
          resultMap.set(val, { ex_correct: true, pos_correct: false });
        }
      } else {
        resultMap.set(val, { ex_correct: false, pos_correct: false });
      }
    }
    return resultMap;
  }

  private printUserHint(
    result: Map<
      string,
      {
        ex_correct: boolean;
        pos_correct: boolean;
      }
    >
  ) {
    const strArr: Array<string> = [];
    let exCount = 0;
    let posCount = 0;
    for (let [char, { ex_correct, pos_correct }] of result) {
      if (!ex_correct) {
        strArr.push("_");
        continue;
      }
      exCount++;
      if (!pos_correct) {
        strArr.push(char.toLowerCase());
        continue;
      }
      strArr.push(char.toUpperCase());
      posCount++;
    }

    console.log("\nOPPS!!!\nYou Entered A Wrong Guess");
    console.log(`${exCount} letters were correct`);
    console.log(`${posCount} letters were in the right position`);
    console.log(`\nHINT:  ${strArr.join(" ")}\n`);
  }

  private printSuccess() {
    console.log("\n");
    console.log(`=======================================`);
    console.log(`================CORRECT================`);
    console.log(`=======================================`);
    console.log("\n");
  }
}

class GameController {
  private currentWord: string;
  private prompt = Prompt({
    autocomplete: this.complete(["yes", "no"]),
  });
  constructor() {
    const max = Math.max(Math.random() * 7, Math.random() * 15);
    let word = generate({ minLength: 5, maxLength: max }) as string;
    while(this.hasReapetedLetters(word)) {
        word = generate({ minLength: 5, maxLength: max }) as string;
    }
    this.currentWord = word
  }

  start() {
    const game = new GameManager(this.currentWord);
    game.gameInit();
    game.runGameLoop();

    console.log(`\n`);
    const response = this.prompt("Do You Want to Play Again?  ");
    if (response === "yes") {
      this.start();
    }
  }

  hasReapetedLetters(word: string) {
    const checkSet = new Set<string>();
    for (let char of word.split("")) {
      if (checkSet.has(char)) return true;
      checkSet.add(char);
    }
    return false
  }

  private complete(commands: Array<string>) {
    return function (str: string) {
      var i;
      var ret: Array<string> = [];
      for (i = 0; i < commands.length; i++) {
        if (commands[i].indexOf(str) == 0) ret.push(commands[i]);
      }
      return ret;
    };
  }
}

const play = () => {
  const controller = new GameController();
  controller.start();
};

play();
