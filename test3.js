// const nice_world = "something"

// console.log(nice_world);

// const test_func = (name) =>{
//     console.log('hello ' + name);
// }


// console.log(require('./test1.js'));
// // test_func(noice);
// // test_func(test2)

// const os = require('os');


const path = require('path');

console.log(path.sep);

const filePath = path.join('/content','subfolder','noice.txt');

console.log(filePath);

const base = path.basename(filePath);

console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','noice.txt');
console.log(absolute)


