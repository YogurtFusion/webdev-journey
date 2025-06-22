arr = [1, 3, 34, 5, 13, 6];


// let newarr = []

// for (let index = 0; index < arr .length; index++) {
    //     const element = arr [index];
    //     newarr.push(element**2)
    
    // }
    
    let newarr = arr.map((e, index, arrya)=>{
        return e**2
    })
    

console.log(newarr)

// arr = [1, 3, 34, 5, 13, 6];

const greaterthanseven = (e)=>{
    if(e>7){
        return true
    }

    return false
}

console.log(arr.filter(greaterthanseven))

// also work 
 
let result = arr.filter(e => e>7);
console.log(result)



let arr2 = [1, 2, 3, 4, 5, 6]


const red = (a, b)=> {
    return a+b
}

console.log(arr2.reduce(red))
let rn = "mocha"
console.log(Array.from(rn))