//ENG: Arrays

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //Note: Printing an empty element from an array won't give an error.

valores[4] = 10 //Note: elements can be added to array's.
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, "teste") //Note: You can push different type of elements into array's.
console.log(valores)

console.log(valores.pop()) //Note: pop will remove the last element from an array and returns that value to the caller.
delete valores[0] //Note: You can delete elements from arrays selecting it's numerical position.
console.log(valores)

console.log(typeof valores) //Note: Array's are objects in JS