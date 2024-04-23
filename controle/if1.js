//ENG: IF 1.

//Note: Function to print a message if the grade is greater than or equal to 7.
function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado...' + nota)
    }
}

//Note: Calling the soBoaNoticia function with grades.
soBoaNoticia(8.1)
soBoaNoticia(6.1)

//Note: Function to print a message if the value is truthy.
function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade...' + valor)
    }
}

//Note: Calling the seForVerdadeEuFalo function with various values to demonstrate truthy behavior.
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo("")
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})