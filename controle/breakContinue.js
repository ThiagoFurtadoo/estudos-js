//ENG: Break, continue.

//Note: Iterating over the indices of the nums array using a for...in loop.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

//Note: Using a labeled statement to break out of the outer loop when specific conditions are met.
externo:
for (a in nums) {
    for (b in nums) {
        //Note: Using a labeled break to exit both loops when a is 2 and b is 3.
        if(a === 2 && b == 3) break externo
        //Note: Printing pairs of indices until the break condition is met.
        console.log(`Par = ${a}, ${b}`)
    }
}
