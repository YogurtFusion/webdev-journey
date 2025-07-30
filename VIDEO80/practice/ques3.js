// create a class student from a class human override a method & see changes

class human {
    constructor(food) {
        this.food = food;
    }

    eat(){
        console.log(` ${this.food} is like money never enough`);
        
    }

}

class student extends human {
    constructor(food, fastfood) {
        super(food)
        this.fastfood = fastfood
    }

    eat(){
        console.log(` student eat's  ${this.fastfood} and cry over assigment`);
        
    }


}

const  man1 = new human("onion") 
man1.eat()

const student1 = new student("dal", "maggi")

student1.eat()