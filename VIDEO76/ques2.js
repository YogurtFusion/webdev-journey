// write the same program from earlier but use async await 


async function loadScript(sc) {
    return new Promise((resolve, reject) =>{
        let script = document.createElement("script")
        script.src = sc
        
        script.onload = () =>{
            console.log('script with async is loaded💦✅');
            resolve()
        }

        script.onerror = (err) =>{
            console.error('script with async is not loaded✨', err);
            reject()
        }

        document.head.append(script)

    })    
}

async function runn() {
    try {
        await loadScript("example.js")
        console.log('External script is running in async');
        
    } catch (err) {
        console.log(`something went boom💥 and  ${err}`);
        
        
    }
}

runn()