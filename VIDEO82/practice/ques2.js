// write a js program to find average of numbers in an array using spread syntax

const arr1 = [2, 3, 4, 6, 3, 2];

const arr2 = [...arr1, 3, 5, 6, 6]

console.log(arr2);

const total= arr2.reduce((a, b) => a + b, 0);
console.log(total);

console.log(total/arr2.length);
