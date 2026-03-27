console.log('this is a promise');

let promp1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a< 0.5){
        reject("no random no. was supporting you")
    }
    else{
        setTimeout(() => {
            console.log('yes Iam done');
            resolve("mocha")
            
        }, 3000);
    }
})

let promp2 = new Promise((resolve, reject) =>{
    let a = Math.random()
    if ( a < 0.5) {
        reject("no random no. is supporting you 2 ")
    }
    else {
        setTimeout(() => {
            console.log('yes I\'m  done 2');
            resolve("mocha 2 ")
        }, 1000);
    }
})

let p3 = Promise.race([promp1, promp2])
p3.then((a) =>{
    console.log(a);
    
}) .catch(err =>{
    console.log(err)
})