const fs = require('fs');
const path = require('path');

module.exports = function(directory, fileExtension, callback) {
    fs.readdir(directory, function (err, files) {
        if (err) {
            return callback(err);
        }
        files = files.filter(file => path.extname(file) === '.' + fileExtension); // On utilise ici la méthode filter, renvoie uniquement les éléments qui répondent à la condition.
        callback(null, files); // Prévoir le cas où il n'y a pas de résultat.
    })
}