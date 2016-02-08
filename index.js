var assert = require('assert');

module.exports = function(a, b){
  assert(Array.isArray(a) && Array.isArray(b), "Both items passed must be of type Array");

  const universe = new Set(a.concat(b));
  const bSet = new Set(b);
  return Array.from(universe).filter((x) => !bSet.has(x));
};