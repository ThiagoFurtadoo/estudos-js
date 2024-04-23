//Note: Extending the Number prototype with a custom method 'entre' to check if a number is within a specified range.
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

//Note: Function to print a message based on the provided grade ranges.
const imrpimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra') //Note: Prints 'Quadro de Honra' if the grade is between 9 and 10 (inclusive).
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado') //Note: Prints 'Aprovado' if the grade is between 7 and 8.99.
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação') //Note: Prints 'Recuperação' if the grade is between 4 and 6.99.
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado') //Note: Prints 'Reprovado' if the grade is between 0 and 3.99.
    } else {
        console.log('Nota Invalida') //Note: Prints 'Nota Invalida' if the grade does not fall within any of the specified ranges.
    }
}

//Note: Calling the imrpimirResultado function with different grades to demonstrate behavior.
imrpimirResultado(10)
imrpimirResultado(8.9)
imrpimirResultado(6.66)
imrpimirResultado(2.3)
imrpimirResultado(-1)
imrpimirResultado(11)
