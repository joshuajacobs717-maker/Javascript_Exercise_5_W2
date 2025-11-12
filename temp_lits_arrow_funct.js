
// TODO: Create a multiline string using template literals
const multilineString = `
To all the subjects of Ymir:
My name is Eren Jaeger. I am using the power of the founding titan to adress all of ymir’s subjects.
The hardening of all the walls present on Paradis island has come undone. And all titans entrapped within them hace started marching. 
My objective is to protect the people of Paradis, the place where I was born and raised. However, the world wishes for the annihilation of the people of Paradis. 
The hatred that has been swelling up for so long will certainly not end, until not just the paradisians, but all of Ymir’s subjects have been eliminated. 
I reject this wish. The wall titans shall trample all earth outside of this island underfoot. Until all life existing there has been exterminated from this world.
`;


console.log(multilineString)
console.log("-".repeat(60))
// TODO: Create a function that uses template literals for HTML generation
function htmlGeneration(){
     html_template = `
     <h1>Hello World</h1>
     <p>My name is Eren Jaeger</p>
     <p>No it ain't</p>
     `;
     return html_template
}

console.log(htmlGeneration())
console.log("-".repeat(60))
// TODO: Convert regular functions to arrow functions
//Regular function
function multiply(a, b){return a * b}

//Arrow function
const multiplyArrow = (a, b) => a * b

console.log(`This is a calling the regular function: ${multiply(2, 4)}`)
console.log(`This is a calling the arrow function: ${multiplyArrow(3, 3)}`)
console.log("-".repeat(60))
// TODO: Use arrow functions with array methods
let myArray = [3, 56, 8, 98, 2]

const removeFirst = (array) => array.shift()
const removeLast = (array) => array.pop()
const reverse = (array) => array.reverse()

console.log(`The array: ${myArray}`)
console.log(`Shift method, the first item in array: ${removeFirst(myArray)}`)
console.log(`Pop method, the last item in array: ${removeLast(myArray)}`)
console.log(`Reverse method: ${reverse(myArray)}`)
console.log("-".repeat(60))