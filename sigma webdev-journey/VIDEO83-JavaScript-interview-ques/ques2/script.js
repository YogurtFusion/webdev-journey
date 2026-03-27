// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let input = [2, 4, 5, 2, 2 ]

for (let i =  0; i <input.length; i++) {
    if (i===0 || input[i] !== input[i-1]) {
        console.log(`${input[i]*2}`);
        
    }else{
        console.log(`${input[i]}`);
    }
        
}