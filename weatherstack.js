#!/usr/bin/env node

const http = require('http');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const args = yargs(hideBin(process.argv)).argv;

const CITY = args._[0];
const url = `http://api.weatherstack.com/current?access_key=${process.env.KEY}&query=${CITY}`;

http.get(url, (res) => {
    const { statusCode } = res;
    if(statusCode !== 200) {
        console.error("Error!");
        return;
    }
    res.setEncoding('utf8');
    let data = "";
    res.on("data", (chunk) => {
        return data += chunk;
    });
    res.on("end", () => {
        let weather = JSON.parse(data);
        const degree = weather.current.temperature;
        const answer = `Температура в городе ${CITY} составляет ${degree} градуса/ов по Цельсию`;
        console.log(answer);
    });
}).on("error", (e) => {
    console.error("Error!");
});