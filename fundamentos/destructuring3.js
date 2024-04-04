//ENG: Destructuring 3.

//Note: Function to generate a random number within a specified range.
function rand({ min = 0, max = 1000 }) {
    //Note: Generates a random number between min and max.
    const valor = Math.random() * (max - min) + min
    //Note: Returns the integer part of the generated random number.
    return Math.floor(valor)
}

//Note: Example of using the rand function with an object argument.
const obj = { max: 50, min: 40 }
console.log(rand(obj)) //Note: Outputs a random number between 40 and 50

console.log(rand({ min: 955 })) //Note: Outputs a random number between 955 and 1000, since max is not provided, it defaults to 1000

console.log(rand({})) //Note: Outputs a random number between 0 and 1000, since both min and max are not provided, they default to 0 and 1000 respectively

//Note: Calling the rand function without providing an argument will result in a TypeError, 
// as it expects an object argument with properties 'min' and 'max'.
// console.log(rand()) // Uncommenting this line will result in a TypeError