//ENG: Logics.

//Note: Function to determine shopping decisions based on two boolean inputs.
function compras(trabalho1, trabalho2) {
    //Note: Logical OR operator (||) checks if either 'trabalho1' or 'trabalho2' is true, returns true if either is true.
    const comprarSorvete = trabalho1 || trabalho2
    
    //Note: Logical AND operator (&&) checks if both 'trabalho1' and 'trabalho2' are true, returns true only if both are true.
    const comprarTv50 = trabalho1 && trabalho2
    
    //Note: Using inequality operator (!=) to determine if 'trabalho1' and 'trabalho2' are different.
    const comprarTv32 = trabalho1 != trabalho2
    
    //Note: Unary logical NOT operator (!) negates the value of 'comprarSorvete', returns true if 'comprarSorvete' is false.
    const manterSaudavel = !comprarSorvete

    //Note: Returning an object with shopping decisions.
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

//Note: Examples of calling the compras function with different inputs.
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))