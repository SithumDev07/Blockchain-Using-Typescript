const name = "Sithum", age = 22, gender = "male";

const sayHi = (name: string, age: number, gender?: string): string => {
    return `Hello ${name}, you have lived ${age} years. and you are a ${gender}.`;
}

const hello = sayHi(name, age, gender);
console.log(hello);

export { };