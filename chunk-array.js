const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const products = [
 { id: 1, name: "Laptop", price: 1000 },
 { id: 2, name: "Phone", price: 500 },
 { id: 3, name: "Tablet", price: 300 },
 { id: 4, name: "Monitor", price: 200 },
];
const nestedArray = [1, [2, 3], [4, [5, 6]], 7];


function chunkArray(arr, size) {
 const chunks = [];
 for (let i = 0; i < arr.length; i += size) {
  chunks.push(arr.slice(i, i + size));
 }
 return chunks;
}
const chunks = chunkArray(numbers, 3);
// [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
console.log(chunks);