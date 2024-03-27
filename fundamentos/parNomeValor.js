//Name: Pair Name Value.

//Par nome/valor
const saudacao = 'Opa' //Lexical context 1

function exec() {
    const saudacao = 'Falaaa' //Lexical context 2
    return saudacao
}

//Note: Objects are groups of pairs of names/values aligned.
const cliente = {
    nome:'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        Numero: 123
    }
}

console.log(saudacao) // Outputs: 'Opa' (accessing variable 'saudacao' from Lexical context 1)
console.log(exec()) // Outputs: 'Falaaa' (invoking function 'exec' to access variable 'saudacao' from Lexical context 2)
console.log(cliente)// (printing the 'cliente' object)