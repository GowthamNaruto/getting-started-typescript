// 1)
const add = (a: number, b: number): number => {
  return a + b;
};

// 2)
function divide(a: number, b: number): number {
  return a / b;
}

// 3)
const multiply = function (a: number, b: number): number {
  return a * b;
};

// 4)
const logger = (message: string): void => {
  console.log(message);
};

// 5)
const throwError = (message: string): void => {
  throw new Error(message);
};

// 6)
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
logWeather(todaysWeather);
