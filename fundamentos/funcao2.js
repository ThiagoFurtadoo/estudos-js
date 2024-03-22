//ENG: Function 2.

//Storing a function on a variable.

const imprimirSoma = function (a, b) { // Note: This function prints the sum of two numbers to the console.
    console.log(a + b)
}

imprimirSoma(2, 3)

//Storing a arrow function on a variable.

const soma = (a, b) => { 
    return a + b 
}

console.log(soma(2, 3))

//Implicit return.

const subtracao = (a, b) => a - b
 console.log(subtracao(2, 3))

 const imprimir2 = a => console.log(a)
 imprimir2('Legal!!!')