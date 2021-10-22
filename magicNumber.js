#!/usr/bin/env node

// const prNum = Math.floor ((Math.random() * 100)/2);
// console.log("prNum");

// const MIN = 1;
// const MAX = 100;

// const getRandomIntInclusive = (min, max) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   const rundomNum = getRandomIntInclusive(MIN, MAX);
//   console.log(`Загадано число в диапазоне от ${MIN} до ${MAX}`);

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

const answer = await rl.question('What do you think of Node.js? ');

console.log(`Thank you for your valuable feedback: ${answer}`);

rl.close();

// const fs = require('fs');
// const readline = require('readline');

// async function processLineByLine() {
//   const fileStream = fs.createReadStream('input.txt');

//   const rl = readline.createInterface({
//     input: fileStream,
//     crlfDelay: Infinity
//   });
//   // Note: we use the crlfDelay option to recognize all instances of CR LF
//   // ('\r\n') in input.txt as a single line break.

//   for await (const line of rl) {
//     // Each line in input.txt will be successively available here as `line`.
//     console.log(`Line from file: ${line}`);
//   }
// }

// processLineByLine();

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // Create a promise based version of rl.question so we can use it in async functions
// const question = (str) => new Promise(resolve => rl.question(str, resolve));

// // A list of all the steps involved in our program
// const steps = {
//   start: async () => {
//     return steps.seeCars();
//   },
//   seeCars: async () => {
//     const seeCars = await question("Would you like to see which cars are available? Please type yes/no: ");
//     if (seeCars === 'yes') { return steps.showCars(); }
//     if (seeCars === 'no') { return steps.locationSearch(); }
//     console.log('No worries, have a nice day');
//     return steps.end();
//   },
//   showCars: async () => {
//     console.log('showing cars');
//     return steps.end();
//   },
//   locationSearch: async () => {
//     const longlat = await question("Would you like to search by latitude or longitude instead? If yes, please type latitude and longitude: ");
//     return steps.end();
//   },
//   end: async () => {
//     rl.close();
//   },
// };

// // Start the program by running the first step.
// steps.start();