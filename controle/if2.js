//ENG: If 2.

//Note: Function teste1 logs the number if it is greater than 7 and always logs 'Final'.
function teste1(num) {
    if(num > 7)
        console.log(num)

    console.log('Final')
}

//Note: Calling teste1 with 6 and 8 to demonstrate behavior.
teste1(6)
teste1(8)

//Note: Function teste2 incorrectly logs the number regardless of its value due to the semicolon after the if statement.
function teste2(num) {
    if(num > 7); {
        console.log(num)
    }
}

//Note: Calling teste2 with 6 and 8 to demonstrate incorrect behavior.
teste2(6)
teste2(8)