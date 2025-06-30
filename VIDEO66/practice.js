let input = Number(prompt())


// question 3 
if (input < 0){
    console.error("you entered an negative age")
}

//ques 4
if (input === 4){
    window.location.href = "https://google.com"

}

let age = 18
if (input < age) {
    alert("you can't drive")
    console.log("you can't drive")
}

else {
    alert("you can drive")
    console.log("you can drive")
}

console.log(input)

// question 2

let again = window.confirm("are you wanna see it again ?")
if (again) {
    location.reload()
} else{
    alert("okay, goodbye!!")
}




//ques 5
let input1 = prompt()

console.log(document.body.style.backgroundColor = input1)
