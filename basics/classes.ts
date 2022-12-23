class Vehicle {
  drive(): void {
    console.log('this is fantastic');
  }
  protected honk(): void {
    console.log('beeep!');
  }
}

class Car1 extends Vehicle {
  drive(): void {
    console.log('vroomm!!');
  }

  startToDrive(): void {
    this.drive();
    this.honk();
  }
}

const car2 = new Car1();
car2.drive();
// car2.honk();
car2.startToDrive();
