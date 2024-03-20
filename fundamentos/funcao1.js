//ENG: Function 1.

function imprimirSoma(a, b) { // Note: This function prints the sum of two numbers to the console.
    console.log(a + b) //It accepts two parameters, 'a' and 'b', and logs their sum.
}

imprimirSoma (3, 2)
imprimirSoma (2)
imprimirSoma (2, 10, 4, 5, 6, 7, 8)
imprimirSoma ()

// Function with return.

function soma(a = 0, b = 0) { // Note: This function returns the sum of two numbers.
    return a + b // It uses default parameter values of 0 for 'a' and 'b' if not provided.
}
console.log(soma(2,3));
console.log(soma(2))
