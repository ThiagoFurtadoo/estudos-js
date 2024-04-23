//ENG: While.

//Note: Function to generate a random integer between min (inclusive) and max (exclusive).
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//Note: Initializing the opcao variable with 0.
let opcao = 0

//Note: Running a loop until opcao becomes -1.
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log('Opção escolhida foi ' + opcao + '.')
}

//Note: Printing a message indicating the end of the loop.
console.log('Até a próxima')