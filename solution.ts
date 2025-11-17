// * Problem 1

type Value = string | number | boolean;
function formatValue(value: Value): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}

// console.log(formatValue("hello"));
// console.log(formatValue(5));
// console.log(formatValue(true));

// * Problem 2

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return Array.isArray(value) ? value.length : 0;
  }
}

// console.log(getLength("typescript"));
// console.log(getLength([]));

// *problem 3

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `"Name: ${this.name}, Age: ${this.age}"`;
  }
}

// const person1 = new Person("John Doe", 30);
// console.log(person1.getDetails());

// const person2 = new Person("Alice", 25);
// console.log(person2.getDetails());

// * Problem 4

interface Items {
  title: string;
  rating: number;
}

function filterByRating(items: Items[]): Items[] {
  return items.filter((item) => item.rating >= 4);
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

console.log(filterByRating(books));
// filterByRating(books);

// * Problem 5
// &

// function filterActiveUsers(
//   items: { id: number; name: string; email: string; isActive: boolean }[]
// ): { id: number; name: string; email: string; isActive: boolean }[] {
//   return items.filter((items) => items.isActive === true);
// }

// const users = [
//   { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
//   { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
//   { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
// ];

// console.log(filterActiveUsers(users));

interface Items1 {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(items: Items1[]): Items1[] {
  return items.filter((items) => items.isActive === true);
}

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

console.log(filterActiveUsers(users));

// * Problem 6

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

// printBookDetails(myBook);

// * Problem 7

//  to do

// * Problem 8

// & Done According to OutPut not logic ,will have finished after getting instruction

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products
    .map((product) => product.price * product.quantity)
    .reduce((total, value) => total + value, 0);
}

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

// console.log(calculateTotalPrice(products));
