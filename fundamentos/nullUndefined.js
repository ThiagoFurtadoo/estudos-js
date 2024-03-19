let valor //Note: "undefined" means a variable has been declared but has not yet been assigned a value:
console.log(valor)

valor = null //Note: "null" is an intentional absence of any object value.
console.log(valor)
/*Note: If you try to execute the command "console.log(valor.toString())" it will lead to an error
since you cannot read the properties of "null".*/

const produto = {}
console.log(produto.preco) //Note: "preco" doesn't have a value.
console.log(produto) //Note: "produto" is empty.

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //Note: Avoid defining object's as undefined using delete is much better.
console.log(!!produto.preco)
console.log(produto) //Note: Also try to use null over undefined if needed.

produto.preco = null //Note: Gives it no value.
console.log(!!produto.preco) //Note: Using !! will convert the value to a boolean.
console.log(produto)