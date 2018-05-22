/* Exo 1 */
console.log(`Hello ${process.argv[2]}`);

/* Exo 2 - Les classes */

class Character {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.health_ = 100;
    }

    damage() {
        this.health_ = this.health_ - 10; 
    }

    getHealth() {
        return this.health_;
    }

    toString() {
        return `x: ${this.x} y: ${this.y} health: ${this.getHealth()}`;
    }
}

var x = process.argv[2];
var y = process.argv[3];
var character = new Character(+x, +y);
character.damage();
console.log(character.toString());

/* Exo 3 * - Héritage de classes */

class Character {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.health_ = 100;
    }

    damage() {
        this.health_ = this.health_ - 10; 
    }

    getHealth() {
        return this.health_;
    }

    toString() {
        return `x: ${this.x} y: ${this.y} health: ${this.getHealth()}`;
    }
}

class Player extends Character {
    constructor(x, y, name) {
        super(x, y);
        this.name = name;
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    toString() {
        return `name: ${this.name} ${super.toString()}`;
    }
}

var x = process.argv[2];
var y = process.argv[3];
var name = process.argv[4];
var character = new Character(+x, +y);
character.damage();
console.log(character.toString());
var player = new Player(+x, +y, name);
player.damage();
player.move(7, 8);
console.log(player.toString());

/* Exo 4 - Modules nommés */
// Main.js
var arg1 = process.argv[2];
var arg2 = process.argv[3];

import {PI, sqrt, square } from './Math';

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));

// Math.js
export const PI = 3.141592;

var _sqrt = function(s, x, last){
    return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};

export const sqrt = function(s){
    return _sqrt(s, s/2.0, 0.0);
};

export const square = function(x) {
    return x * x;
};

/* Exo 5 - Export default */
// Main.js
var arg1 = process.argv[2];
var arg2 = process.argv[3];

import Math from './Math';

console.log(Math.PI);
console.log(Math.sqrt(+arg1));
console.log(Math.square(+arg2)); 

// Math.js
const PI = 3.141592;

var _sqrt = function(s, x, last){
    return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};

function sqrt(s) {
    return _sqrt(s, s/2.0, 0.0);
}

function square(x) {
    return x * x;
}

export default {
    PI,
    square,
    sqrt
}

/* Exo 6 - Scope de block */

'use strict';
// Cette variable `a` doit être accessible à l'extérieur du scope de bloc.
let a = 5;
    
// Cette variable `b` ne doit pas pouvoir être réassignée.
const b = process.argv[2];
    
if (a === 5) {
    // Cette variable `c` ne devrait être valide que dans son bloc.
    let c = 4;
    console.log(c);  // 4
    
    // Cette variable `b` ne devrait être valide que dans son bloc.
    const b = 8;
    console.log(b); // 8
}
    
console.log(a); // 5
console.log(b);

try {
    // Tentative de changement de la valeur de `c`
    c = 1000;
} catch (e) {
    // mais une erreur `c is not defined` devrait apparaître.
    console.log(e);
}

/* Exo 7 - Propriété calculée */
var evenOrOdd = +process.argv[2];
var evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
var sum = +process.argv[3] + evenOrOdd;

var obj = {
    [evenOrOddKey]: evenOrOdd,
    [sum]:sum
};

console.log(obj);

/* Exo 8 - Itérateur for of */

const max = process.argv[2];

let FizzBuzz = {
    [Symbol.iterator]() {
        let num = 1;
        return {
            next() {
                if (num > max) {
                    return {done:true};
                }

                let value = num;
                if (value % 15 === 0) {
                    value = "FizzBuzz";   
                } else if (value % 3 === 0) {
                    value = "Fizz";
                } else if (value % 5 === 0) {
                    value = "Buzz";
                }
                num++;
                return {done: false, value:value}
            }
        }
    }
}

for (var n of FizzBuzz) {
    console.log(n);
}

/* Exercice 9 - Générateur */
const max = process.argv[2];

let FizzBuzz = function* (){
    let num = 1;
    while (num <= max) {
        let value = num;
        num++;
        if (value % 15 === 0) {
            value = "FizzBuzz";   
        } else if (value % 3 === 0) {
            value = "Fizz";
        } else if (value % 5 === 0) {
            value = "Buzz";
        }
        yield value;
    }
}();

for (var n of FizzBuzz) {
    console.log(n);
}

/* Exercice 10 - Déstructuration */

var json = {
    "name": {
        "first": "Yosuke",
        "family": process.argv[2]
    },
    "birth": {
        "year": 1982,
        "month": 12,
        "day": process.argv[3]
    }
};

var { name:{family: familyName}, birth:{day: birthDay} } = json;

console.log(familyName);
console.log(birthDay);

/* Exercice 11 - Fonctions fléchées */
// Reçoit un array en argument avec des string. Prend la 1ère lettre de chaque string et retourne une string qui
// concatène l'ensemble
var inputs = process.argv.slice(2);
var result = inputs.map((x) => x[0]).reduce((result, x) => result + x);

console.log(result);

/* Exercice 12 - Rest et spread */

var rawArgs = process.argv.slice(2);
var args = [];
    
rawArgs.forEach(val => {
    let commaSep = val.split(',');
    commaSep.forEach(val => {
        if(val !== '') args.push(+val);
    });
});

// Fonction avg qui calcule la moyenne
function avg(...args) {
    return args.reduce((a, b) => a + b) / args.length;
}

console.log(avg(...args))