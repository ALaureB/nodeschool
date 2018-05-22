/* Exo 1 */
var emotify = require(process.argv[2]);
console.log(emotify(process.argv[3]));

/* Exo 2 */
var isCoolNumber = require(process.argv[2]);
var assert = require('assert');
assert(isCoolNumber(42));

/* Exo 3 */
const test = require('tape');
const fancify = require(process.argv[2]);

test('fancify', function (t) {
    t.equal(fancify('Wat'), '~*~Wat~*~', 'Wraps a string in ~*~')
    t.equal(fancify('Wat', true), '~*~WAT~*~', 'Optionally makes it allcaps')
    t.equal(fancify('Wat', false, '%'), '~%~Wat~%~', 'Optionally allows to set the character')
    t.end()
})

/* Exo 4 */
const test = require('tape');
const repeatCallback = require(process.argv[2]);

test('repeatCallback', function (t) {
    t.plan(6)
    repeatCallback(6, function () {
        t.pass('callback called')
    })
})

/* Exo 5 */
const test = require('tape');
const feedCat = require(process.argv[2]);

test('cat feeding', function (t) {
    t.plan(2)
    t.equal(feedCat('food'), 'yum')
    t.throws(function () {
        feedCat('chocolate')
    })
})