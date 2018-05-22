/* Exo 4
var arg1 = process.argv[2];
var arg2 = process.argv[3];

import {PI, sqrt, square } from './Math';

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2)); */

/* Exo 5 */
var arg1 = process.argv[2];
var arg2 = process.argv[3];

import Math from './Math';

console.log(Math.PI);
console.log(Math.sqrt(+arg1));
console.log(Math.square(+arg2)); 