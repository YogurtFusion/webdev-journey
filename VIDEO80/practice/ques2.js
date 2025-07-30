// create a js class to add two complex no. in the above class

class complexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    add(other){
        const newReal = this.real+other.real
        const newImaginary = this.imaginary + other.imaginary
        return new complexNumber(newReal , newImaginary)
        
    }

    display(){
        console.log(`${this.real}, ${this.imaginary}i`);
        
    }
}
const comp1 = new complexNumber(2, 3);
const comp2 = new complexNumber(22, 32);

const result = comp1.add(comp2)
result.display()
