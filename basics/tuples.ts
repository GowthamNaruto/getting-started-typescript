const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// With Tuple formate, data can be altered in any order like below
const pepsi = ['brown', true, 40];
pepsi[0] = 40;
pepsi[2] = 'brown';

// With Tuple we cannot change the data entry order
// By including annotaions here we turn this array into a Tuple
const pepsi1: [string, boolean, number] = ['brown', true, 40];
pepsi1[2] = 40;

// So rather than having to repeat out this definition,
// we can declare a Tuple structure and use anywhere we want and
// works the same
type Drink = [string, boolean, number];
const pepsi2: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 60];
const maazza: Drink = ['yellow', false, 70];
