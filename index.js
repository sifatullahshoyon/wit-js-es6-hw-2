// 1.  Define a function with two parameters, assigning a default value to the second one. Call it with 
// both one and two arguments, and show the outputs. 

const twoParamFunction = (param1, param2 = 10) => param1 * param2;

// console.log(twoParamFunction(25,32));


// 2.  Create a function that takes a name and a city as input and returns a multi-line message using 
// template literals, incorporating both variables. 

const nameAndCityMessage = (name, city) => {
    return `Hello, my name 
    is ${name} and I live in ${city}.`
};

// console.log(nameAndCityMessage("John", "New York"));


// 3.  Combine two arrays using the spread operator and find the maximum value in the merged array. 

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const result = [...array1, ...array2].reduce((max, current) => Math.max(max, current));

// console.log(result);


// 4.  Create an object with properties name, age, and country, and use destructuring to extract them 
// into variables. Also, destructure an array of five numbers to get the first two elements. 

const person = {
    name: "John Doe",
    age: 30,
    country: "USA"
};

const { name, age } = person;

// console.log(name , age);



const numbers = [1, 2, 3, 4, 5];

const [first, second] = numbers;

// console.log(first , second);


// 5.  Access the city property of a nested object using both dot notation and optional chaining. 


const user = {
    name: "John Doe",
    age: 30,
    isDeveloper: true,
    address : {
        city: "New York",
        country: "USA",
        zipCode: "10001",
        roadNumber: "123 Main St",
        state: "NY"
    }
}

const {address} = user;
// console.log(address?.state);



// 6.  Given an array of student objects with properties name and marks, use:map() to extract the 
// names.

const students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 92 },
    { name: "Charlie", marks: 78 },
    { name: "Diana", marks: 88 },
    { name: "Eve", marks: 95 }
  ];
  
  const names = students?.map(student => student.name);
  
// console.log(names); 


// 7.  filter() to return students with marks above 80. 

const studentsMarks = students?.filter(student => student.marks > 80);

// console.log(studentsMarks);


// 8.  Use map() on a string array to create a new array where each string is prefixed with "Hello, ". 

const strings = ["apple", "banana", "cherry"];

const prefixedStrings = strings?.map(string => `Hello, ${string}`);

// console.log(prefixedStrings);

// 9.  Given an array of objects, use filter() to return all objects where a specific condition is met (e.g., 
// products priced above a certain amount). 

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Smartphone", price: 600 },
    { name: "Tablet", price: 300 },
    { name: "Monitor", price: 200 },
    { name: "Keyboard", price: 50 }
  ];
  
  const minPrice = 300;
  const expensiveProducts = products.filter(product => product.price > minPrice);
  
//   console.log(expensiveProducts); 

// 10. You have an array of product objects, where each product has a  name  and  price  . Write  a 
// function that uses the  map  method to create a new  array of strings. Each string should contain 
// the product's name and price formatted as  Product:  [name] costs $[price] 

const formatProductDetails = (products) => {  
    return products?.map(product => `Product: ${product.name} costs $${product.price}`); };

// console.log(formatProductDetails(products));
 
  
  