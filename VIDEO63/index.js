let arr = [1, 2, 4, 5, 7, "what if there was a string"]
// Index   0, 1, 2, 3, 4
// arr[0] = 5666;
// arr[5] = " i can change arr like this "
// console.log(arr, typeof (arr));
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[4]);

// console.log(arr.toString(), typeof arr)


// insert a first Element and removes first element 


/*
unshift() → adds to start
push() → adds to end
*/

// console.log(arr.unshift(12), arr)
// console.log(arr.push(10), arr) ;


/*
pop() → removes from end
shift() → removes from start
*/

// console.log(arr .pop() , arr);
// console.log(arr, arr.shift())






// will not work 
// console.log(arr.delete[5], arr)

// let del = delete arr[6]
// console.log(del)
// console.log(delete arr[3] )


// // use this 
// delete arr[5]; // deletes the value at index 5
// console.log(arr); // [1, 2, 4, 5, 7, <1 empty item>]


// sort: 


//splice

let No = [1, 2, 3, 4, 5, 6, 7]

// No.splice(3, 3)
// console.log (No)

// let newno = No.splice(0, 6)
// let newnoo = No.splice(2, 6)
let newnooo = No.splice(2, 6, 234, 67)

console.log(newnooo, No)