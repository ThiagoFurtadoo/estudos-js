//ENG: Change Challenge.

/*let a = 7
  let b = 94

  console.log(a)
  console.log(b)*/

//Change the variables so that "a" becomes 94, and "b" 7.

//My answer: Wrong??? got the same result but i feel like it's cheating.

{
let a = 7;
let b = 94;

a = 94; //Could've used "[a, b] = [b, a]"
b = 7;

console.log(a);
console.log(b);
}

//Teacher's answer:

{
let a = 7;
let b = 94;

let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);
}

