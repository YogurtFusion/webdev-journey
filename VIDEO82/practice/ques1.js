// Write a js program to print the following after 2 sec daily 
// hello 
// world   

async function main() {
    return new Promise((resolve) => {
        setInterval(() => {
            console.log("hello");
            console.log("world");
            resolve()
        }, 2000);
    })

    
}

main()