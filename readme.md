# Blockchain using TypeScript

# Installation

    npm install -g typescript

# Setup

create tsconfig.json and include below,

    {
        "compilerOptions": {
            "module": "commonjs",
            "target": "ES2015",
            "sourceMap": true
        },
        "include": [
            "index.ts"
        ],
        "exclude": ["node_modules"]
    }

# Run

inside package.json

    "scripts": {
        "start": "node index.js",
        "prestart": "tsc"
    },

## Optional Parameteres

    const sayHi = (name, age, gender?) => {
        console.log(`Hello ${name}, you have lived ${age} years. and you are a ${gender}.`);
    }

    sayHi(name, age, gender);

## Specific Types

    const sayHi = (name: string, age: number, gender?: string) => {
        console.log(`Hello ${name}, you have lived ${age} years. and you are a ${gender}.`);
    }

    sayHi(name, age, gender);

## Interfaces

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

## Classes

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

## Array of types

    const genesisBlock: Block = new Block(0, "15453456453454", "", "Hello Genie", 123456);

    let blockChain: [Block] = [genesisBlock];

