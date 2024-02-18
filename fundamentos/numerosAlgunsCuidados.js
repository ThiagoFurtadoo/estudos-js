//ENG: Numbers, a few cautions.

console.log(7 / 0)
console.log("10" - 5) //Note: JS takes the internal content of the string and covert to numerical value.
console.log("Show!" * 2) //Note: This will not work of course.
console.log(0.1 + 0.7) //Note: JS is not 100% precise so it may cause some "flaws" like this one.
// console.log(10.toString()) Thiw will not work.
console.log((10.345).toFixed(2))