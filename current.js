#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const args = yargs(hideBin(process.argv)).argv;

const currentDate = new Date();

const add = () => {
    console.log("add");
    if(args.d) {
        const result = currentDate.getDate() + args.d;
        console.log(result);
        return;
    }
    if(args.m) {
        const result = currentDate.getMonth() + args.m;
        console.log(result);
        return;
    }

}
const sub = () => {
    if(args.d) {
        const result = currentDate.getDate() - args.d;
        console.log(result);
        return;
    }
    if(args.m) {
        const result = currentDate.getMonth() - args.m;
        console.log(result);
        return;
    }
}

if(args._[0]) {
    const methodName = args._[0];
    switch(methodName) {
        case 'add':
            add();
          break
      
        case 'sub':
            sub();
        break
        default:
            break
      }
} else {
    if(args.y) {
        const result = currentDate.getFullYear();
        console.log(result);
        return;
    } else if(args.m) {
        const result = currentDate.getMonth();
        console.log(result);
        return;
    } else if(args.d) {
        const result = currentDate.getDate();
        console.log(result);
        return;
    } else {
        console.log(currentDate.toISOString().slice(0, 10));
        return;
    }
}

// тесты

// current
// current -y
// current -m
// current -d
// current add -d 2
// current add -m 2
// current sub -d 2
// current sub -m 2
