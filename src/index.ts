class Hooman {
    public name: string;
    public age: number;
    public gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const person = new Hooman("Sithum", 22, "male");

const sayHi = (person: Hooman): string => {
    return `Hello ${person.name}, you have lived ${person.age} years. and you are a ${person.gender}.`;
}

const hello = sayHi(person);
console.log(hello);

export { };