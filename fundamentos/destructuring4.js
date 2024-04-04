//ENG: Destructuring 4.

// Note: Function to generate a random number within a specified range using array destructuring.
function rand([min = 0, max = 1000]) {
    //Note: Swapping 'min' and 'max' values if 'min' is greater than 'max'.
    if (min > max) [min, max] = [max, min]
    //Note: Generating a random number between 'min' and 'max'.
    const valor = Math.random() * (max - min) + min
    //Note: Returning the integer part of the generated random number.
    return Math.floor(valor)
}

// Note: Examples of using the rand function with array arguments.
console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))

//Note: Calling the rand function without providing an argument will result in a TypeError, 
// as it expects an array argument with optional elements 'min' and 'max'.
// console.log(rand()) // Uncommenting this line will result in a TypeError
