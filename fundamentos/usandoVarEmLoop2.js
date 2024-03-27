//ENG: Using var in loop 2.

const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push  (function() { //Note: Pushing anonymous functions into the 'funcs' array.
    console.log(i) //Note: Each function logs the current value of 'i'.
    })
}

funcs[2]() // Note: Invoking the function at index 2 of the 'funcs' array.
funcs[4]()// The function logs the value of 'i' at the time it's invoked, which is 10.