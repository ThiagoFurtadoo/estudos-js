//ENG: Object 2.

console.log(typeof Object) // Outputs: 'function' (since 'Object' is a built-in function)
console.log(typeof new Object) // Outputs: 'object' (since 'new Object' creates an instance of the 'Object' constructor)

const Cliente = function() {}
console.log(typeof Cliente) // Outputs: 'function' (since 'Cliente' is a function)
console.log(typeof new Cliente) // Outputs: 'object' (since 'new Cliente' creates an instance of the 'Cliente' function)

class Produto {} //ES 2015 (ES6)
console.log(typeof Produto) // Outputs: 'function' (since 'Produto' is a class constructor function)
console.log(typeof new Produto()) // Outputs: 'object' (since 'new Produto()' creates an instance of the 'Produto' class)