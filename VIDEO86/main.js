// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1> hello world</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// import {a, b, c} from "./mymodule.js"
// console.log(a,b,c);

// import harry from "./mymodule.js"
// console.log(harry);

(function(exports, require, module, __filename, __dirname){
    // Module code actually lives here
})

const a = require("./mymodule2")
console.log(a, __dirname, __filename);
