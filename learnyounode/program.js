/* Exo 1
console.log("HELLO WORLD"); */


/* Exo 2
// Pour additionner une série de chiffres reçue en ligne de commande.
console.log(process.argv);
var result = 0;
for (var i=2; i < process.argv.length; i++) {
    result =+ Number(process.argv[i])
}
console.log(result); */


/* Exo 3
// Pour compter le nombre de lignes dans un fichier. Chemin du fichier reçu en ligne de commande. Méthode synchrone.
var fs = require('fs');
    
var content = fs.readFileSync(process.argv[2]);
var countingLines = content.toString().split('\n').length - 1; // Tableau buffer récupéré : besoin de le convertir en string.

console.log(countingLines); */


/* Exo 4
// Même chose mais en asynchrone ==> contenu récupéré via une callback.
const fs = require('fs');
const file = process.argv[2];

fs.readFile(file, function (err, data) {
    if (err) {
        return console.log(err);
    }
    const lines = data.toString().split('\n').length - 1;
    console.log(lines);
}) */


/* Exo 5
// Filter les fichiers contenus dans un dossier par leur extension. Dossier + extension reçus en ligne de commande.
// On passe directement en asynchrone.

const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
const ext = '.' + process.argv[3];

fs.readdir(folder, function (err, files) { // On lire les fichiers contenus dans le dossier.
  if (err) return console.error(err) // Prévoit l'erreur.
  files.forEach(function (file) {
    if (path.extname(file) === ext) { // path.extname permet d'extraire l'extension d'un fichier.
      console.log(file);
    }
  })
}) */


/* Exo 6
// Même chose mais via la création d'un module dans un fichier séparé.

const moduleTest = require('./module');

const dir = process.argv[2]; 
const filterExtension = process.argv[3];

moduleTest(dir, filterExtension, function (err, list) {
    if (err) {
        return console.error('There was an error:', err)
    }
    list.forEach(file => console.log(file));
}) */

/* Exo 7
const http = require('http');

const url = process.argv[2];

http.get(url, function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
}).on('error', console.error); */

/* Exo 8 - Collecteur HTTP

const http = require('http');
const bl = require('bl');

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
}) */

/* Exo 9 - Jongler avec l'asynchrone */
const http = require('http');
const bl = require ('bl');

let results = [];
let count = 0;

function printResults () {
    for (let i = 0; i < 3; i++) {
        console.log(results[i])
    }
}

function getResults (index) {
    http.get(process.argv[2 + index], function(response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.log(err)
            }

            results[index] = data.toString()
            count++

            if (count === 3) {
                printResults()
            }
        }))
    })
}

for (let i=0; i < 3; i++) {
    getResults(i)
}