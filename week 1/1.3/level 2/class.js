class Animal {
    constructor(name, legCount) {
        this.name = name
        this.legCount = legCount
    }
    describe() {
        return `${this.name} has ${this.legCount} legs`
    }
    static myType() { // can be called directly on the class
        return `This is of type Animal`
    }
}

let Animal1 = new Animal("Dog", "Four"); // creating an object using the class
let Animal2 = new Animal("Cat", "Four");

console.log(Animal1.describe());
console.log(Animal2.describe());
console.log(Animal.myType()); // static function
