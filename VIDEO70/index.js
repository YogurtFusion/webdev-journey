let colors = ["red", "blue", "green", "yellow", "cyan", "aqua", "teal"]

const randomColor = colors[Math.floor(Math.random() *colors.length)]

// console.log(document.getElementById("box").style.backgroundColor= randomColor);

console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor=randomColor
    console.log(e);
    
    
});

let col = ["blue", "green", "teal", "black", "purple", "white"]
const rancolors = col[Math.floor(Math.random() *col.length)] 

document.querySelectorAll(".box").forEach(e => {
    e.style.color= rancolors;
    console.log(e);
    
});
