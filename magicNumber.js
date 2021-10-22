#!/usr/bin/env node

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (str) => new Promise(resolve => rl.question(str, resolve));

const MIN = 1;
const MAX = 100;
RUNDOM = 0;

const quiz = {
  start: async () => {
    RUNDOM = quiz.getRandomIntInclusive(MIN, MAX);
    return quiz.output(`Загадано число в диапазоне от ${MIN} до ${MAX}`);
  },
  output: async (text) => {
    const enteredValue = await question(text);
    quiz.checkInput(enteredValue); 
  },
  getRandomIntInclusive: (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  checkInput: async (enteredValue) => {
      if (!enteredValue) quiz.end();
      console.log("RUNDOM", RUNDOM);
      console.log("enteredValue", enteredValue);
      if(enteredValue == RUNDOM) {
        console.log(`Отгадано число ${enteredValue}`);
        return quiz.end();
      } else if (enteredValue > RUNDOM) {
        return quiz.output(`Меньше`);
      } else if (enteredValue < RUNDOM) {
        return quiz.output(`Больше`);
    }
  },
  end: async () => {
    console.log('Goodbye!');
    rl.close();
  },
};

quiz.start();