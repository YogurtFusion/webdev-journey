//  see if student is an instance of human using instanceof  keyword
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


console.log(student1 instanceof human);