//ENG: Destructuring 1.

//Notes: Destructuring allows for extracting values from objects or arrays into distinct variables.
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero:1000
    }
}

const { nome, idade } = pessoa //Notes: Destructuring the 'pessoa' object to extract values of 'nome' and 'idade' properties.
console.log(nome, idade)

const { nome: n, idade: i } = pessoa //Note: Destructuring with renaming using colon syntax.
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa //Note: Destructuring with default values.
console.log(sobrenome, bemHumorada)

const { endereco: { longradouro, numero, cep } } = pessoa
console.log(longradouro, numero, cep) //Outputs: 'Rua ABC 1000 undefined' (extracted values from nested object 'endereco')