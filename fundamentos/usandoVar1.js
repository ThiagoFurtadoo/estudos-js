//ENG: Using Var 1.

{
    {
        {
            {
                var sera = 'Será???' // Note: The 'var' keyword is used to declare variables in JS.
                console.log(sera)
            }
        }
    }
}

console.log(sera) // Note: The output will be "Será???" (since "var" variables are accessible outside of their block scope)

function teste() {
    var local = 123
    console.log(local)
}

teste()
//console.log(local) //Note: This line will throw an error if uncommented.
/* Note: Attempting to access 'local' outside of the 'teste' function will result in a ReferenceError
since 'local' is scoped to the function.*/