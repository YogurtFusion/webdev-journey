console.log("moch loft is a cafe");
console.log("I wanna try chapple cheese");

setTimeout(() => {
    console.log("I'm inside the time out")
}, 0);

setTimeout(() => {
    console.log("I'm inside the time out 2 ")
}, 0);

console.log("the end")

const fn = () => {
    console.log("nothing");
    
}
const callback = (arg, fn) => {
    console.log(arg)
    fn()
}



const loadScript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    document.head.append(sc)
  
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)


