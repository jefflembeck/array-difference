const tap = require('tap');
const arrayDifference = require('../index.js');


var a, b;

// test non arrays

try {
  arrayDifference(a, b);
} catch(e){
  tap.pass("Error thrown when null objects are passed");
}

// test matching arrays

a = [1, 2, 3];
b = [1, 2, 3];

tap.equal(arrayDifference(a, b).length, 0);

// Test simple number diff
a = [1,2,3];
b = [2,3];
tap.equal(arrayDifference(a, b)[0], 1);

// Test array with multiple items of same value

a = [1, 1, 2, 2, 3, 3];
b = [2, 3];

tap.equal(arrayDifference(a, b).length, 2);
tap.equal(arrayDifference(a, b)[0], 1);
tap.equal(arrayDifference(a, b)[1], 1);
