// create a js class to create a complex number. create a constructor to sett the real and the complex part 

class complexNumber {
    constructor(real, imaginary){
        this.real = real;
        this.imaginary=imaginary;
        console.log(`${this.real}, ${this.imaginary}i`);
        
    }
}
 const comp = new complexNumber(2, 3);