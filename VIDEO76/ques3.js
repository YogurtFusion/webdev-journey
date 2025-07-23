// create an promise which reject's after 3 seconds use an async| await to get it's value. use a try catch to handle it's error 
async function out() {
    
try {

    let prm = new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log('rejecting a promise after 3 sec');
            reject("promise rejected")
            
        }, 3000);
    })

    let result = await prm 
    console.log('result✅', result);
    
    
} catch (err) {
    console.log('there is something boom going on ', err);
    
    
}

}

out()