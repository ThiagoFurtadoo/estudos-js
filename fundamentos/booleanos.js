//ENG: Booleans.

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //Note: JS can use "!" as some sort of converter to turn something into true or false.
                       //Use Boolean as a function or use the double NOT operator.

console.log("Can be considered as true:")
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = Infinity))

console.log("Can be considered as false:")

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("To finish it off.")
console.log(!!('' || null || 0 || NaN)) //Note: This is false since there is none true component.
console.log(!!(' ' || Infinity || 1 || "0")) //Note: This is true since there is none false component.

let nome = ''
console.log(nome || "Unknown") //Note: It will print "Unknown" since there is nothing in "nome".

{

let nome = 'Known'
console.log(nome || "Unknown") //Note: It will print "Kown" since there is something in "nome".

}