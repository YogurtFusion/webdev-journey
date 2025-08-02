// write a JavaScript function which resolves a promise after n seconds. The funtions takes n as the parameter. Use  an IIEF to excecute the function with a different values of  n 

async function sleep(n) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(`slept of ${n} seconds`)
        }, n*1000);
    })
    
}


(async function main() {
    const delays = [1, 2, 3, 4]
    for (let n of delays) {
        const result = await sleep(n)
        console.log(result);
        
    }
    console.log("done snoozing 😴💤");
    
    
})()

