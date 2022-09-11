const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
const test = readFileSync('./content/subFolder/test.txt', 'utf-8');

console.log(first, second, test)
 
writeFileSync('./content/result-sync.txt', `Here's the result: ${first}, ${second}`)  