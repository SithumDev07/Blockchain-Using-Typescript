interface Hooman {
    name: string;
    age: number;
    gender?: string
}

const person = {
    name: "Sithum",
    age: 22,
    gender: "male"
}

const sayHi = (person: Hooman): string => {
    return `Hello ${person.name}, you have lived ${person.age} years. and you are a ${person.gender}.`;
}

const hello = sayHi(person);
console.log(hello);

export { };