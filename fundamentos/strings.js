//ENG: Strings.

const escola = "Cod3r"

console.log(escola.charAt(4)) //Note:"charAt" returns a new string consisting of the single UTF-16 code unit at the given index.
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //Note: "charCodeAt" returns an integer representing the UTF-16 code unit at the given index.
console.log(escola.indexOf('3')) //Note: "indexOf" Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

console.log(escola.substring(1)) //Note: "substring" returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + (escola) + ("!"))
console.log(escola.replace(3, "e"))

console.log('Ana,Maria,Pedro'.split ("a"))
