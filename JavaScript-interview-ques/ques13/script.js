// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.
let cart = [
    {price: 233, quantity: 3},
    {price: 300, quantity: 2}
    
]

function calculateTotal(cart) {
    let total = 0
    for (const item of cart) {
     total +=   item.price*item.quantity
    }
     return total 
}

console.log(calculateTotal(cart))
