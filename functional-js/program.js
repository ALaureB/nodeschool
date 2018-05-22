/* Exo 1 - Hello World
function upperCaser(input) {
    return input.toUpperCase()
}
  
module.exports = upperCaser; */

/* Exo 2 - Fonctions supérieures

function repeat(operation, num) {
    if (num <= 0) {return operation()}
    return repeat(operation, --num)
}
  
module.exports = repeat; */

/* Exo 3 - Bases Map

module.exports = function doubleAll(numbers) {
    var result=[];
    result = numbers.map(number => number * 2);
    return result;
} */

/* Exo 4 Bases filter
module.exports = function getShortMessages(messages) {
    var result=[];
    result = messages.filter(item => item.message.length < 50 ).map(item => item.message);
    return result;
} */

/* Exo 5 - Every, Some 

module.exports = function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(submittedUser) {
            return goodUsers.some(function(goodUser) {
                return goodUser.id === submittedUser.id
            })
        })
    }
} */

/* Exo 6 - Reduce
function countWords(arr) {
    return arr.reduce(function(countMap, word) {
      countMap[word] = ++countMap[word] || 1 // incrémenter ou initialiser à 1
      return countMap
    }, {}) // le 2e argument de reduce initialise `countMap` à `{}`
  }
  
module.exports = countWords; */

/* Exo 7 - Récursivité */
function reduce(arr, fn, initial) {
    return (function reduceOne(index, value) {
        // condition de fin
        if (index > arr.length - 1) return value
  
        // calculer les valeurs et les passer à l’étape suivante
        return reduceOne(index + 1, fn(value, arr[index], index, arr))
    })(0, initial) // IIFE.  Démarrer la récursion avec les valeurs de départ
  }
  
module.exports = reduce;

/* Exo 8 
J'ai rien capté !! */

/* Exo 9 - Application partielle sans Bind */
