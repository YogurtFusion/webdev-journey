// async function getdata() {
//     // simulate getting data from a server 
//     return new Promise ((resolve, reject) =>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

/*
settle means resolve or reject
resolve means promise has settled sucessfully
reject's means promise has not settled sucessfully  
*/


async function getdata() {
    //     // simulate getting data from a server 
    //     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     let data = await x.json()
    //     console.log(data);
    
    let x  = await fetch ('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body:  JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    
    });
    let data = await x.json()
    return data
    
    }

   
    
async function main() {
    console.log('loading modules');
    
    console.log('Doing something else');
    
    let data = await getdata()
    
    console.log(data);
    
    console.log('process data');
    
    console.log('task 2');
    
}

main()

// data.then((v) =>{
//     console.log('data');
    
//     console.log('process data');
    
//     console.log('task');
    
// })