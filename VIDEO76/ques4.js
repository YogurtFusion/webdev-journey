// write a program using promise.all() inside async await to await 3 promises compare its result's with the case where we await's the promises one by one 
async function run() {
    
    let prm1 = new Promise = ((resolve, reject) =>{
        let a = Math.random()
        
        if (a<0.5) {
            resolve("a is smaller then 0.5")
            
        } else {
            reject("nope a is not smaller then 0.5")
        }
    })
    
    let prm2 = new Promise = ((resolve, reject) => {
        let a = Math.random()
        
        if (a < 0.5) {
            resolve(" a is smaller then 0.5")
            
        }
        else{
            reject("no  a is not smaller")
        }
    })
    
    let prm3 = new Promise = ((resolve, reject ) =>{
        let a = Math.random()
        if (a<0.5) {
            resolve("yes a is smaller")
        } else {
        reject("nope a is not smaller ")
    }
})
}

Promise.all([prm1, prm2, prm3])