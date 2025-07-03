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
