import path from "path"

let mypath = "c:\\workspace\\01code cluster\\sigma webdev-journey\\VIDEO87\\chapple.txt"

console.log(path.extname(mypath));

console.log(path.dirname(mypath));
console.log(path.basename(mypath));

console.log(path.join("c:/", "programs\\harry.txt"));// trying that those files which don't exit will work or not
console.log(path.join("c:/", "programs\\chapple.txt"));
