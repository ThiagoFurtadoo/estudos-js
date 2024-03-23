//ENG: Using Var 2.

var numero = 1
{
    var numero = 2 //Note: If you try to make another variable with the same name, it will overwrite the previous variable.
    console.log('dentro =', numero)
}
console.log('fora =', numero)