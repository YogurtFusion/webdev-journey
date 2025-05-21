console.log("I'm a tutorial on loops")

let a = 1;
console.log(a);
console.log(a+1);
console.log(a+2);

for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

let obj = {
    name: "mocha loft",
    role: " cafe", 
    company: "mocha.ai",
}

for (const key in obj) {
    console.log(key)
}


for (const key in obj) {
        const element = obj[key];
        console.log(key, element)
    
}

for (const element of "Mocha_loft") {
    console.log(element)
}

let i = 0;
while(i<50) {
    console.log(i);
    i++
}

{
    
let i = 103;
do {
    console.log(i)
    i++;
} while (i<5);
}