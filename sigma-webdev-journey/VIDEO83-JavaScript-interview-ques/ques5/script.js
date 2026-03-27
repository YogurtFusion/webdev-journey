// 5. The Sum Selector:  You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

let arr = [1, 3, 5, -2]
sum = 0
function sumSelector(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0){ 
            console.log(`yeah i find an - digit in your array which ${arr[i]} `);
            
            break
        }
        sum += arr[i]
    }
    
    console.log(`${sum}`);
     return sum ;
}
console.log(` the value of your array is ${sumSelector(arr)}`);
