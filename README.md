# array-difference-linear

Given array a and array b, returns a - b, all in linear time!

This requires node 4.x, as there are ES6 features added

## How to use

array-difference takes two arguments, both of which must be arrays, and then
returns an array of the difference

```

const arrayDifference = require('array-difference');

const a = [1,2,3];
const b = [2, 3, 4];

arrayDifference(a, b);
// -> [1]

```

## Release History

* Version 1.0.0: First release