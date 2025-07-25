let a = prompt("Enter your first no. ")

let b = prompt("Enter second no.")

let sum = parseInt(a) + parseInt(b)
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("sorry this is not allowed ni🌚g👺")
}
console.log(sum);

function main() {
    let x = 1;
    
    try {
        console.log('the sum is ', sum*x);
        
}catch (err){
    console.log('error agya ');
    console.error('selfe made error bolte');
}
finally {
    console.log('file are been close and db connection is being close');  
}

}

let bc = main()