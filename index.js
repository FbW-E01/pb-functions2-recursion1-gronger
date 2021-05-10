/*
# Recursion

#### Calculate the sum of natural number up to n
* Write a JavaScript program to compute the sum of an array of integers


```javascript
    const array = [1, 2, 3, 4, 5, 6]
    sum(array)  // return 21
```
*/

const myArray = [1, 3, 5, 7];

function sum(array) {
    if (array.length === 0) { return 0 }
    const poppedOff = array.pop();
    
    console.log(poppedOff);
    console.log(array);
    // sum();
    return poppedOff + sum(array);

}

console.log(sum(myArray));


/* so what is happening IS:

first, im using an if statement  to step a stopping condition ( that the array is empty -- using .length !!)

then, Im removing one of the items in the array and storing it in a variable

(im console logging said variable and the array (calling the parameter) just so that im aware of wahts goig on)

at the end, i am returning the popped off variable PLUS calling the function which will repeat the whole process, creating a kind of loop type thing, where all of the popped off items and being added together until the stopping condition (0, i.e the array is empty) is met


// addUpAll(myArray);

// function addUp(item) {
//     const buffer = " ".repeat(level);

//     if (for let i = 0; i < item.length; i++) {
//         printItem((item[i]), level + 1);
// }

// addUp(myArray);


*/
const newArray = [20, 5, 10]

function addUpArray(array) {
    if (array.length === 0) { return 0 }

    const number = array.pop();
    
    console.log("current number is: " + number);
    console.log("currently left in the array is: " + array);

    return number + addUpArray(array);
}

console.log(addUpArray(newArray));