let colors = ["red", "green", "blue"];

// Array destructuring by position.
let [ firstColor, secondColor ] = colors;
console.log(firstColor, secondColor);

// Array desctructuring with default values.
let [ , , thirdColor, fourthColor = "black" ] = colors;
console.log(thirdColor, fourthColor);
