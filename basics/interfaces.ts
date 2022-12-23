const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`
  Name: ${vehicle.name}
  Year: ${vehicle.year}
  Broken: ${vehicle.broken}
  `);
};

printVehicle(oldCivic);

// More simplified way of writing above one
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldIndigo = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name} is introduced in ${this.year}`;
  },
};

const printVehicle1 = (vehicle: Vehicle): void => {
  console.log(`
  Name: ${vehicle.name}
  Year: ${vehicle.year}
  Broken: ${vehicle.broken}
  `);
};

const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

// printVehicle1(oldIndigo);
// printVehicle2(oldIndigo);

// Use anywhere
// Doing like this below methods of declaring a common interface.
// We can have a much more reusable function inside of our application.
// This function can be used with any type of object that satisfies the reportable interface.
interface Reportable {
  summary(): string;
}

// For Vehicle
const oldMaruti = {
  name: 'omni',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name} is introdeced in ${this.year}`;
  },
};

// For Drinks
const cococola = {
  name: 'coco-cola',
  colour: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink ${this.name} of ${this.colour} colour has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};
printSummary(oldMaruti);
printSummary(cococola);
