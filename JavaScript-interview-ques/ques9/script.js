//  The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

async function placeHolder() {
    return new Promise ((resolve, reject) =>{
        let delay = Math.floor(Math.random()*2000 + 1000)
        setTimeout(() => {
            resolve("your order is placed 🛒✅")
        }, delay);
    })
}

(async () => {
    let message = await placeHolder()
    console.log(`${message}`);
    
})()