let apples: number = 5;
let speed: string = '5 km/h';
let hasName: boolean = false;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// buily in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'yellow'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// Classes
class Car {}
let car: Car = new Car();

// Objects literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
// Lec - 604
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 1, "y":2}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line
// and then initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) When we want a variable to have a
// type that can't be inferred
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
