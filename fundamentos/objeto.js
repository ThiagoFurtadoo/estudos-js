//ENG: Objects.

const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //Note: Avoid spaces in attributes.

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo', // Note: "objects" are key-value pairs used to store and organize data, -
    preco: 79.90, //- where keys are strings (or symbols) and values can be of any data type.
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)