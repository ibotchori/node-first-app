// console.log("Hello from node.js");

// import for working wih file system
const fs = require("fs");

// creates file, with name and content
fs.writeFileSync("hello.txt", "Hello node.js");


// delete file
const path = "./hello.txt";

try {
  fs.unlinkSync(path);
  console.log("File removed:", path);
} catch (err) {
  console.error(err);
}