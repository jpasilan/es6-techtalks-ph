// Spread the values1 array as separate arguments to Math.max().
let values1 = [1, 2, 4, 3, 6, 5];
console.log(Math.max(...values1));

// Unlike rest parameters, spread operators 
// can be positioned anywhere.
let values2 = [-10, -2, -1];
console.log(Math.max(...values2, 0));

