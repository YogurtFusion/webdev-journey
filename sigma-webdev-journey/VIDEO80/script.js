class Animal {
    constructor(name){
        this.name = name
        console.log("object is created");
        
    }

    eats(){
        console.log("kha rha");
        
    }
    jump(){
        console.log("kood rha")
    }

    
}


class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("object is created and he is a lion");
        
    }

    eats(){
        super.eats()
        console.log("kha rha roarrr!!...");
        
    }
    
}

let a = new Animal("bunny")
console.log(a);

let l = new Lion("sheru")
console.log(l);
