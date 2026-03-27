
        // write a program to find factorials of a no. using reduce and using for loops
        // let's say it's 6
        // 6! = 6*5*4*3*2*1

        let factorial = 6;
        let product = [1, 2, 3, 4, 5, 6];
        for (let i = 0; i < product.length; i++) {
            const element = product[i];
            const fact = (a, b) => {
                return a*b
            }
            console.log(element)
            console.log(arr.reduce(fact))

        }