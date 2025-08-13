// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

input = [1, 2, 3, 4, 5, 6]
async function arrayMaping(input) {
    let count = 0
     return  new Promise ((resolve, reject) => {
        setTimeout(() => {
            let result = []
            for (let i = 0; i < input.length; i++) {
              result.push(input[i]*2)
                             
            }
            resolve(result)
        }, 500);

});
   
}

arrayMaping(input).then(console.log)