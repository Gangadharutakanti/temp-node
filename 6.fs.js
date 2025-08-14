const {readFileSync,writeFileSync}=require('fs')

const  first=readFileSync('5a.path\\first.txt','utf8')
const second=readFileSync('5a.path/second.txt','utf8')
writeFileSync('5a.path/ganga.txt',`here is the result :${first} ,${second}`,{flag : 'a'})
console.log(first)
console.log(second)


/*const { openSync, readFileSync, writeFileSync, closeSync } = require('fs');

// Open file for read + append
const fd = openSync('example.txt', 'a+');

// Append new data
writeFileSync(fd, 'Hello World\n');

// Read the file contents
const data = readFileSync(fd, 'utf8');
console.log(data);

closeSync(fd);
*/
