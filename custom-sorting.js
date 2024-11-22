
// Example: Sorting by Age
// Ascending Order
const people = [
 { name: "Alice", age: 25 },
 { name: "Bob", age: 30 },
 { name: "Charlie", age: 20 }
];
{


 people.sort((a, b) => a.age - b.age); // Sort by age in ascending order
 console.log(people);
 // Output: [
 //   { name: "Charlie", age: 20 },
 //   { name: "Alice", age: 25 },
 //   { name: "Bob", age: 30 }
 // ]

}

// Descending Order

{
 people.sort((a, b) => b.age - a.age); // Sort by age in descending order
 console.log(people);
 // Output: [
 //   { name: "Bob", age: 30 },
 //   { name: "Alice", age: 25 },
 //   { name: "Charlie", age: 20 }
 // ]

}

/**
 * Sorting by Another Property (e.g., Name)
 * 
To sort strings (like name), use localeCompare for case-insensitive comparisons.
 */

people.sort((a, b) => a.name.localeCompare(b.name)); // Sort by name in ascending order
console.log(people);
// Output: [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 20 }
// ]


/**
 * Sorting with Multiple Properties
 * 
If two objects have the same value for a property, you can sort by another property as a secondary criterion.
 */
{
 const employees = [
  { name: "Alice", age: 30, salary: 50000 },
  { name: "Bob", age: 30, salary: 60000 },
  { name: "Charlie", age: 25, salary: 55000 }
 ];

 employees.sort((a, b) => {
  if (a.age === b.age) {
   return b.salary - a.salary; // Secondary sort by salary (descending)
  }
  return b.age - a.age; // Primary sort by age (ascending)
 });
 console.log(employees);
 // Output: [
 //   { name: "Charlie", age: 25, salary: 55000 },
 //   { name: "Bob", age: 30, salary: 60000 },
 //   { name: "Alice", age: 30, salary: 50000 }
 // ]

}