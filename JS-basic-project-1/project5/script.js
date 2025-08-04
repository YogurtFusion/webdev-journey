// write a JavaScript program to prentend  to look like a hacker write an async funtion which will simply display the following output: "Initializing Hacking program..." "Hacking Ashish username..." "Username found aashish17..." "connecting to facebook...". Try to use Html and Styling if possible   
const terminal = document.getElementById("terminal")
console.log(terminal);

function delay(ms) {
    return new Promise(res => setTimeout(res , ms))

}
let messages;
(async () => {
    messages= await new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve([
                "Initializing Hacking program...",
                "Hacking Ashish username...",
                "Username found aashish17...",
                "connecting to facebook..."
            ])
        }, 1000);


    })
    for (let msg of messages) {
        await delay(1000)
        terminal.innerHTML += msg + "<br>"

    }
console.log(messages);

})()
