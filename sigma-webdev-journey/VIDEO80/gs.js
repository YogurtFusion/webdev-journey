class User{
    constructor (name){
        //invokes the setter
        this.name = name
    }
    get name(){
        return this._name
        
    }

    set name (value){
        if (value.length < 4){
            console.log("name is to short.");
            return  
            
        }
        this._name = value;
    }
}

let user = new User ("john");
console.log(user.name);

user.name = "Harry"
console.log(user.name); // my code finish here 
