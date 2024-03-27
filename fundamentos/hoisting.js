//ENG: Hoisting.

console.log(a) //Note: It is undefined since variable 'a' is hoisted but not yet assigned a value.
var a = 2 
console.log('a =', a) //Note:'a = 2' (after assignment)

/*Note: JavaScript hoists variable declarations to the top of their scope during the compilation
phase, which allows the variable 'a' to be accessible before it is assigned.*/

/*console.log(a)
let a = 2  
console.log('a =', a)*/
//Note: Running the block above will result in a ReferenceError since 'let' variables are not hoisted.