//ENG: If and Else.

//Note: Function to print 'Aprovado!' if the grade is greater than or equal to 7, otherwise prints 'Reprovado!'.
const imrpimirResultado = function(nota){
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

//Note: Calling the function with grades to demonstrate conditional behavior.
imrpimirResultado(10)
imrpimirResultado(4)
imrpimirResultado('Epa!')
