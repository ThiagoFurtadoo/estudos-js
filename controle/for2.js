//ENG: For 2.

//Note: Iterating over the indices of the notas array using a for...in loop.
const notas = [6.7, 7.4, 9.8, 8.2, 7.7]
for (let i in notas) {
    //Note: Printing the index and value of each element in the notas array.
    console.log(i, notas[1])
}

//Note: Iterating over the properties of the pessoa object using a for...in loop.
const pessoa = {
    nome: 'Ana',
    sobrenome: 'silva',
    idade: 29,
    peso: 64
}
for(let atributo in pessoa) {
    //Note: Template literals (`...`) allow embedding expressions (${...}) within strings.
    console.log(`${atributo} = ${pessoa[atributo]}`)
}