// 10. The Coffee Machine:    In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

// let type  = ["latte", ]
const coffeeTypes = prompt("Enter your coffee")

async function brewCoffee(type) {
    let delay = Math.floor(Math.random()*3000 + 1000)
     return new Promise ((resolve , reject) =>{
        setTimeout(() => {
            resolve(`your coffee is ready ${type}`)
        }, delay);
     })
}

(async () => {
    let message= await brewCoffee(coffeeTypes)
    console.log(`${message}`);
    
})()