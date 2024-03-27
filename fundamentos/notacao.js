//ENG: Notation.

// Dot notation is commonly used to access and assign properties in objects.

console.log(Math.ceil(6.1)) // Note:The Math.ceil() function returns the smallest integer greater than or equal to a given number.
const obj1 = {}
obj1.nome = 'Bola'
// obj1 ['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome) { //Note: Constructor functions can be used to create objects with shared properties and methods.
    this.nome = nome //Note: 'this' keyword refers to the current instance of the object being created.
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira') //Note: Creating instances of the Obj constructor function.
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()