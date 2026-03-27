console.log(ab);

// async function sleep() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(45)
//         }, 1000);
//     })
    
// }

function sum(a, b, c) {
    return a + b + c
    
    
}
console.log("checking var that can i print something in middle or not");


(async function main() {
    console.log(a1);
    
    // let a = await sleep() 
    // console.log(a);
    
    // let b = await sleep()
    // console.log(b);
    // let [x, y, ...rest] = [2, 3, 5, 7,8, 9, 10, 11]
    // console.log(x, y, rest);

    var a1 = 3;


    let obj = {
        a: 1, 
        b: 2, 
        c: 3, 
    }

    let {a, b} = obj
    console.log(a, b);
    

})()

var ab = 3; // var have hosting but let and const haven't
// (async function main1() {
//     let [a, b] = [23, 32, 75]
//     console.log(a, b);
    
// })()


let arr = [3, 2, 0]
console.log(arr[0] + arr[1] + arr[2]);
console.log(sum(...arr));
console.log(sum(arr[0], arr[1], arr[2]));
