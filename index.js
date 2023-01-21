// Challenge 1
// Create a function addTwothat accepts one input and adds 2 to it.

const addTwo = (num) => {
    num = num + 2
    console.log(num)
}
addTwo(4)

// Challenge 2
// Create a function add S that accepts one input and adds an "s" to it.

const addS = (letter) => {
    letter = letter + 's'
    console.log(letter)
}
addS('Duck')

// Challenge 3
// Create a function called mapthat takes two inputs:
// an array of numbers (a list of numbers)
// a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
// Have mapreturn a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.

const map = (arr, multiplyByTwo) => {

    console.log(multiplyByTwo(arr))
}
const multiplyByTwo = (num) => {
    num = num.map(num => 2 * num)
    return num
}

map([1, 2, 3, 4, 5], multiplyByTwo)


let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
letters.forEach(function(char) {
  alphabet += char;
});
console.log(alphabet);   //prints 'abcd'

