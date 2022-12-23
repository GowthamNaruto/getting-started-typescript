const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [
  ['f150', 'figo'],
  ['corolla', 'innova'],
  ['camaro', 'beat'],
];

// Help with inference when extracting values
const car1 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push('10B');

// Helo with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2022-12-22');
importantDates.push(new Date());
// importantDates.push(100)
