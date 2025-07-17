let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    // alert("I was clicked, YYAAYY!!!...")
    document.querySelector(".box").innerHTML = " <b> Yayy you were clicked</b> enjoy your click!"
})
button.addEventListener("dblclick", ()=>{
    // alert("I was clicked, YYAAYY!!!...")
    document.querySelector(".box").innerHTML = " <b> if it's showing then you double clicked</b> enjoy your click!"
})

button.addEventListener("contextmenu", ()=>{
    alert("Don't  ")
})

/* button*/ document.addEventListener("keypress", (e)=>{
    console.log(e.key, e.keyCode)
})