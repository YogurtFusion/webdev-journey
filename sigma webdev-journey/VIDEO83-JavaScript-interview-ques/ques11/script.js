// 11. The Array Filterer:   You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

let products = [
    {name: "blacktshirt ", price:  100},
    {name: "pwderblue tshirt ", price:  200},
    {name: "olive tshirt ", price:  300},
    {name: "babypink tshirt ", price:  200},
    {name: "white Tshirt ", price:  300},
]
// let filteredProducts = [];
function filterProducts(products, maxprize) {
     return products.filter(product => product.price <= maxprize)
    
}
console.log(filterProducts(products, 200));

let filteredProducts = filterProducts(products, 200);
console.log(filteredProducts);