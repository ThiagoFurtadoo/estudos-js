//ENG: Numbers.

const peso1 = 1.0
const peso2 = Number('2.0') /*Note: Number is a function and values of other types
                            can be converted to numbers using "Number"*/
console.log(peso1,peso2)
console.log(Number.isInteger(peso1))    
console.log(Number.isInteger(peso2))

const avalicao1 = 9.871
const avalicao2 = 6.871

const total = avalicao1 * peso1 + avalicao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(4)) //Note: "toFixed" can be used to limit the amount of digits that can me printed.
console.log(media.toString(2))//Note: "toString" can be used to convert the numbers to binary.
console.log(typeof media)