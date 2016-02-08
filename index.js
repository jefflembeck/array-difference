module.exports = function(a, b){
  if(!(Array.isArray(a) && Array.isArray(b))){
    throw new Error("Both items passed must be of type Array");
  }
  const bSet = new Set(b);
  return a.filter((x) => !bSet.has(x));
};