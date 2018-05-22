/* Exo 1
setTimeout(function(){ console.log('TROP TARD !'); }, 300); */

/* Exo 2

'use strict';

var Test = new Promise(function(fulfill, reject) {
    setTimeout(fulfill, 300, 'ACCOMPLIE !');
});

Test.then((arg) => console.log(arg)); */

/* Exo 3

var Test = new Promise(function(fulfill, reject) {
    const x = Error('REJET !'); // Error objet JS avec un message d'erreur
    setTimeout(reject, 300, x );
});

Test.then((arg) => console.log(arg), (arg) => onReject(arg));

function onReject (error) {
    console.log(error.message);
} */

/* Exo 4

var promise = new Promise(function(fulfill, reject) {
    const rejectMessage = Error("JE N'AI PAS ETE APPELEE");
    fulfill("J'AI ETE APPELEE");
    reject(rejectMessage);
})

promise.then((arg) => console.log(arg), (arg) => onRejected(arg) )

function onRejected (error) {
    console.log(error.message);
}  */

/* Exo 5
var promise = new Promise (function(fulfill, reject) {
    fulfill("VALEUR DE LA PROMESSE");
})

promise.then((arg) => console.log(arg));

console.log("PROGRAMME PRINCIPAL"); */  // Ce console.log va s'exécuter avec celui de la ligne 46.

/* Exo 6

var promise = Promise.resolve("Promesse accomplie");
promise.then((value) => console.log(value)); */

/* Exo 7

var promise1 = first();

var promise2 = promise1.then((val) => second(val));

promise2.then(console.log); */

/* Exo 8

function attachTitle(text) {
    return `DR. ${text}`;
}

Promise.resolve('MANHATTAN')
    .then(attachTitle)
    .then(console.log); */

/* Exo 9

function parsePromised(json) {
    return new Promise ((fulfill, reject) => {
        try {
            fulfill(JSON.parse(json));
        } catch(e) {
            reject(e);
        }
    });
}

function onReject(error) {
    console.log(error.message);
}

parsePromised(process.argv[2]).then(null, onReject); */

/* Exo 10

function iterate(num) {
    console.log(num);
    return num + 1;
}
  
function alwaysThrows() {
    throw new Error('OH NOES');
}
  
function onReject(error) {
    console.log(error.message);
}
  
Promise.resolve(iterate(1))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch(onReject); */

  /* Exo 11  Je comprends pas !!!
   function all(promise1, promise2) {
       return new Promise((fulfill, reject) => {
           var counter = 0;
           promise1.then()
       });
   } */

/* Exo 12 */
var qhttp = require('q-io/http');

qhttp.read("http://localhost:1337")
.then(function (json) {
  console.log(JSON.parse(json));
})
.then(null, console.error)
.done()