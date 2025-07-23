// write a program using promise.all() inside async await to await 3 promises compare its result's with the case where we await's the promises one by one 

async function run() {
    

let prm1 = new Promise((resolve, reject) =>{
    let a = Math.random()

    if (a<0.5) {
        resolve("a is smaller then 0.5")
        
    } else {
        reject("nope a is not smaller then 0.5")
    }
})

let prm2 = new Promise((resolve, reject) => {
    let a = Math.random()

    if (a < 0.5) {
        resolve(" a is smaller then 0.5")

    }
    else{
        reject("no  a is not smaller")
    }
})

let prm3 = new Promise((resolve, reject ) =>{
    let a = Math.random()
    if (a<0.5) {
        resolve("yes a is smaller")
    } else {
        reject("nope a is not smaller ")
    }
})

try {
    let result1 = await prm1
    console.log('promise 1 is resolved✊');
    
} catch (err) {
    console.log('no there is something boom is going in prm1 💥', err);
}

try {
    let result2 = await prm2
    console.log('promise 2 is resolved 💦');
    
} catch (err) {
    console.log('there is something boom is going in promise 2✨`' , err);
    
    
}

try {
    let result3 = await prm3;
     console.log('promise  3 is resolved 🍑');
     
} catch (err) {
    console.log(`there is something boom is going with 3 ${err}❌` );
    
}
try {
    let result = await Promise.all([prm1, prm2, prm3])
    console.log('all there are aligner toghether 🥵');
    
} catch (err) {
    console.log('there is somthing kboom is going with one or more promises⌛');
    
}
}

run()
