let numArray = [3, 56, 2, 48, 5];

// Notice that in order for this to work, you dont put the Math.pow section
// inside the curly braces just like in a normal function.
const squareRootArray = numArray.map(eachNum => 
    Math.pow(eachNum, 0.5)
);

console.log(squareRootArray);


//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
