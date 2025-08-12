// 10. The Coffee Machine:    In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

let type  = "latte"

async function coffeMachine(type) {
    let delay = Math.floor(Math.random()*3000 + 1000)
     return new Promise ((resolve , reject) =>{
        setTimeout(() => {
            resolve(`your cofee is ready ${type}`)
        }, delay);
     })
}

(async () => {
    let brewCoffee = await coffeMachine(type)
    console.log(`${brewCoffee}`);
    
})()