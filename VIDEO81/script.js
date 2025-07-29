const randomDelay = () => {
    const timeout = Math.random() * 3 + 1
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })

}

const addItem = async (item) => {
    await randomDelay()
    let div = document.createElement("div")
    div.innerHTML = item;
    document.body.append(div)
}

async function main() {
    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div")
        last = last[last.length - 1]
        if (!last) return;
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        }
        else {
            last.innerHTML = last.innerHTML + "."
        }
    }, 1000);


    let text = ["Initialized Hacking now reading your data",
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up"
    ]

    for (const item of text) {
        await addItem(item)
    }

    await randomDelay()
    clearInterval(t)
}

main()