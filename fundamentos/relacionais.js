//ENG: Relationals.

//Note: The loose equality operator (==) compares values after type conversion. Returns true if the values are equal.
console.log('01)', '1' == 1) // Outputs: true

//Note: The strict equality operator (===) compares values and types. Returns true only if the values and types are the same.
console.log('02)', '1' === 1) // Outputs: false

//Note: The loose inequality operator (!=) compares values after type conversion. Returns true if the values are not equal.
console.log('03)', '3' != 3) // Outputs: false

//Note: The strict inequality operator (!==) compares values or types. Returns true if the values or types are not the same.
console.log('04)', '3' !== 3) // Outputs: true

//Note: The less than operator (<) compares numerical values. Returns true if the left operand is less than the right operand.
console.log('05)', 3 < 2) // Outputs: false

//Note: The greater than operator (>) compares numerical values. Returns true if the left operand is greater than the right operand.
console.log('06)', 3 > 2) // Outputs: true

//Note: The less than or equal to operator (<=) compares numerical values. Returns true if the left operand is less than or equal to the right operand.
console.log('07)', 3 <= 2) // Outputs: false

//Note: The greater than or equal to operator (>=) compares numerical values. Returns true if the left operand is greater than or equal to the right operand.
console.log('08)', 3 >= 2) // Outputs: true

const d1 = new Date(0)
const d2 = new Date(0)

//Note: The loose equality operator (==) compares Date objects by reference. Returns false since they reference different objects.
console.log('09)', d1 === d2) // Outputs: false

//Note: The strict equality operator (===) compares Date objects by reference. Returns false since they reference different objects.
console.log('10)', d1 == d2) // Outputs: false

//Note: Comparing the time values of the Date objects using getTime(). Returns true if the time values are equal.
console.log('11)', d1.getTime() === d2.getTime()) // Outputs: true

//Note: The loose equality operator (==) returns true if both operands are undefined or null.
console.log('12)', undefined == null) // Outputs: true

//Note: The strict equality operator (===) returns false since undefined and null are of different types.
console.log('13)', undefined === null) // Outputs: false
