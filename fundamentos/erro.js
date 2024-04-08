//ENG: Error.

//Note: Function to handle errors and throw custom error objects.
function tratarErroELancar(erro) {
    //Note: Throwing a custom error object with properties 'nome', 'msg', and 'date'.
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date()
    }
}

//Note: Function to print the name property of an object in uppercase.
function imprimirNomeGritando(obj) {
    try {
        //Note: Accessing the 'nome' property of 'obj' and converting it to uppercase.
        console.log(obj.nome.toUpperCase())
    } catch (e) {
        //Note: Handling any errors that occur during the execution of the try block.
        tratarErroELancar(e)
    } finally {
        //Note: Executing code that should always run, regardless of whether an error occurred.
        console.log('Final')
    }
}

//Note: Creating an object 'obj' with a 'nome' property.
const obj = { nome: 'Roberto' }
imprimirNomeGritando(obj)
