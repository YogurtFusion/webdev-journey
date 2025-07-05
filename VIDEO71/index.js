console.log(document .querySelector(".box").innerHTML);
console.log(document.querySelector(".box") .innerHTML= "I'm changed through html  selector");

console.log(document .querySelector(".box").outerHTML);
console.log(document.querySelector(".box").nodeName);
console.log(document.querySelector(".box") .tagName);



console.log(document .querySelector(".container").innerHTML);

console.log(document .querySelector(".container").innerText);
console.log(document .querySelector(".container").textContent);

// console.log(document.querySelector(".container").hidden = true); // can hide any page

console.log(document.querySelector(".box").hasAttribute("style"));

console.log(document.querySelector(".box").getAttribute("style"));

console.log(document.querySelector(".box") .setAttribute("style", "display: inline"));

console.log(document .querySelector(".box") .attributes);

console.log(document.querySelector(".box").removeAttribute("style"));

console.log(document.designMode = "on");// can edit any website locally

console.log(document.querySelector(".box").dataset);

let div = document.createElement("div");
div.innerHTML = "I have been inserted"
div.setAttribute("class", "created")
document.querySelector(".container").before(div)

// explore append
let div2 = document.createElement("div")
div2.append(" heyy first div 2")
document.body.append(div2) 

let p = document.createElement("p")
p.textContent = "I'm a para"
document.body.append(p)


let Div = document.createElement("div")
let span = document.createElement("span")
span.textContent = " 🔥 hot stuff "

div.append(" Text before ", span, " text after ")
document.body.append(Div)


let prepend = document.createElement("div")
div.textContent = "peak shit"
document.body.prepend(prepend)


let nav = document.createElement("nav")
nav.textContent = "replecating nav with .before"
document.body.before(nav)

let footer = document.createElement("footer")
footer.textContent  = "just replicating the footer with the help of after"
document.body.after(footer)

// let replace = document.createElement("div")
// replace.textContent= "replacing"
// document.body.replaceWith(replace)

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("beforebegin","  <b> I'm under the water please help me iouuuuu...</b> ")


console.log(document.querySelector(".container").classList);

console.log(document.querySelector(".container").className);

console.log(document.querySelector(".container").classList.add("mocha"));

console.log(document.querySelector(".container").classList.remove("mocha"));

console.log(document.querySelector(".container") .classList.add("add", "this"));

console.log(document.querySelector(".container").classList.toggle("red"));
// browser needs one and you have to use loop for multiple time see it
console.log(document.querySelector(".container").classList.toggle("red"));
