//ENG: Switch.

//Note: Function to print a message based on the provided grade using a switch statement.
const imprimirResultado = function (nota) {
    //Note: The switch statement evaluates the provided expression (Math.floor(nota)) and executes the code associated with the first matching case.
    switch (Math.floor(nota)) {
        //Note: The 'case' keyword defines different cases or conditions to check against.
        //Note: Multiple cases without breaks allow for multiple values to trigger the same action.
        case 10:
        case 9:
            //Note: If the grade is 10 or 9, 'Quadro de Honra' is printed.
            console.log('Quadro de Honra')
            //Note: The 'break' statement terminates the switch statement and exits the block.
            break
        case 8: case 7:
            //Note: If the grade is 8 or 7, 'Aprovado' is printed.
            console.log('Aprovado')
            //Note: The 'break' statement terminates the switch statement and exits the block.
            break
        case 6: case 5: case 4:
            //Note: If the grade is 6, 5, or 4, 'Recuperação' is printed.
            console.log('Recuperação')
            //Note: The 'break' statement terminates the switch statement and exits the block.
            break
        case 3: case 2: case 1: case 0:
            //Note: If the grade is 3, 2, 1, or 0, 'Reprovado' is printed.
            console.log('Reprovado')
            //Note: The 'break' statement terminates the switch statement and exits the block.
            break
        //Note: The 'default' keyword specifies the action to take if no case matches.
        default:
            //Note: If the grade does not match any specified case, 'Nota inválida' is printed.
            console.log('Nota inválida')
    }
}

//Note: Calling the imprimirResultado function with a grade of 10 to demonstrate behavior.
imprimirResultado(10) // Outputs: Quadro de Honra