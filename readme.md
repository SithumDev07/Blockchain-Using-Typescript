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

