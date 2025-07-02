document.getElementById("navbar").children[0].style.color= "red"

// question 2
 
// ques 3 

let green = document.getElementById("green")

green.firstElementChild.style.color = "green"

green.lastElementChild.style.color = "green";

// let lists = document.querySelectorAll("#li li");

// for (let i = 0; i < lists.length; i++) {
//     lists[i].style.color = "cyan";
    
// }


let list = document.querySelectorAll("li").forEach(e =>{
    e.style.backgroundColor= "cyan";
})

let el = document.firstElementChild;
el.style

/* which of the following is used to look for the fastest ancestor that make thatt matches a given css selector 
a. matches 
b. closet // correct answer
c. contains 
d. none of these
*/ 