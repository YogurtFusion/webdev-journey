function idea(cafe_name) {
    console.log(cafe_name + " is a quite neice idea")
    console.log("buildng " + cafe_name + " would be a great experience")
    console.log(cafe_name + " will sharpen your skills")
}
// "" have a 1 space between " between string and pramas


idea("Mohcha_loft")

idea("Idea from harkirat")

function sum (a, b){
    console.log(a + b)
    
}

sum(3, 6)

function sum1 (a, b){
    // console.log(a + b) // this is printing result1 , result2 and 3
    return a +b
}

result1 = sum1(4) // NaN not a number

result2 = sum1(4, 5)

result3 = sum1(3, 5)

console.log("the sum of the thse no. are " + result1)
console.log("the sum of the thse no. are " + result2)
console.log("the sum of the thse no. are " + result3)



//c= default value

function sum2 (a, b, c  = 13){
    // console.log(a + b) // this is printing result1 , result2 and 3
    return a + b + c
}

result1 = sum2(4, 6)

result2 = sum2(4, 5)

result3 = sum2(3, 5,)
result4 = sum2(3, 5, 2) // here I can add and optional value

console.log("the sum of the thse no. are " + result1)
console.log("the sum of the thse no. are " + result2)
console.log("the sum of the thse no. are " + result3)
console.log("the sum of the thse no. are " + result4)

const func1 = (x)=> {
    console.log("I'm an arrow function", x)
}

func1(23);
func1(52);
func1(94);