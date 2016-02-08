var assert = require('assert');

module.exports = function(a, b){
  assert(Array.isArray(a) && Array.isArray(b), "Both items passed must be of type Array");

  const bSet = new Set(b);
  return a.filter((x) => !bSet.has(x));
};