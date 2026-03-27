// write a program to load a js file into a browser using promises. usen then to catch the error 

function loadScript(scr) {
    return new Promise((resolve, reject) => {

        let sc = document.createElement("script")
        sc.src = scr
        sc.onload = () =>{
            console.log('script loaded✅💦');
            resolve()
        }

        sc.onerror = (err) => {
            console.log('sad script is not loaded ❌🍑');
            reject(err)
        }
        
        
        
        document.head.append(sc)
    })
    
}

loadScript("example.js")

.then (() => {
    console.log('script rolled 👺');
    
})

.catch ((err) =>{
    console.log('somethig got boomed✊', err);
    
})