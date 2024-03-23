//ENG: Using Let 1.

var numero = 1
{
    let numero = 2 //Note: The let declaration inside the block creates a new variable numero
    console.log('dentro =', numero) //with block scope, which doesn't affect the global variable numero declared with var.
}
console.log('fora =', numero)