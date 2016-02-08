var assert = require('assert');

module.exports = function(a, b){
  assert(Array.isArray(a) && Array.isArray(b), "Both items passed must be of type Array");

  var universe = new Set(a.concat(b));
  var bSet = new Set(b);
  return Array.from(universe).filter(function(x){
    return !bSet.has(x);
  });
};