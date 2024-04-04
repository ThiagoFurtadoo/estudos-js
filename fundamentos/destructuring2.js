//ENG: Destructuring 2.

//Note: Destructuring an array to extract its elements.
const [a] = [10]
console.log(a)

//Note: Destructuring with skipping elements and default values.
const [n1, , n3, n5, n6 = 0] = [10, 7 ,9 ,8]
console.log(n1, n3, n5, n6)

//Note: Nested destructuring with skipping elements.
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)