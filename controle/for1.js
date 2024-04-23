//ENG: For 1.

//Note: Using a while loop to iterate while the condition (contador <= 10) is true.
let contador = 1
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    //Note: Incrementing the contador variable.
    contador++
}

//Note: Using a for loop to iterate over a range of values (1 to 10).
for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

//Note: Iterating over an array of notas using a for loop.
const notas = [6.7, 7.4, 9.8, 8.2, 7.7]
for(let i = 0; i < notas.length; i++) {
    //Note: Accessing each element of the notas array using index i.
    console.log(`nota = ${notas[i]}`)
}
