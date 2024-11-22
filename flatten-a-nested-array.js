/**
 * 1. Using the flat() Method

The flat() method creates a new array with all sub-array elements concatenated into it up to a specified depth.
 */

const nestedArray = [1, [2, 3], [4, [5, 6]]];

// Flatten one level deep
const flattenedOnce = nestedArray.flat(1);
console.log(flattenedOnce); // Output: [1, 2, 3, 4, [5, 6]]

// Flatten two levels deep
const completelyFlattened = nestedArray.flat(2);
console.log(completelyFlattened); // Output: [1, 2, 3, 4, 5, 6]


/**
 * 2. Using Recursion to Flatten Deeply Nested Arrays

For deeper and dynamic nesting, you can use recursion to flatten arrays.
 */

{
 function flattenArray(arr) {
  let result = [];
  for (const element of arr) {
   if (Array.isArray(element)) {
    // Recursively flatten the nested array
    result = result.concat(flattenArray(element));
   } else {
    result.push(element);
   }
  }
  return result;
 }

 const nestedArray = [1, [2, [3, [4, 5]]], 6];
 const flattenedArray = flattenArray(nestedArray);
 console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

}