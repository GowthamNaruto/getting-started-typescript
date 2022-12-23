const profile = {
  name: 'gowtham',
  age: 27,
  coords: {
    lat: 9.032854,
    lng: 77.332545,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// If using destructuring this is the way to write annotations
const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
