class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}
const myPerson = new Person("Alice");
myPerson.greet();

class Animal {
  static kingdom = "Animalia";
  constructor(name, species, sound, action) {
    this.name = name;
    this.species = species;
    this.sound = sound;
    this.action = action;
  }
  introduce() {
    console.log(`I am ${this.name} and I am a ${this.species}.`);
  }
  makeSound() {
    console.log(`${this.name} says ${this.sound}!`);
  }
  doAction() {
    console.log(`${this.name} is ${this.action}!`);
  }
  static kingdomInfo() {
    console.log(`All animals belong to the kingdom: ${this.kingdom}.`);
  }
}
const myAnimal = new Animal("Buddy", "dog", "Woof", "running");
const mysAnimal = new Animal("Whiskers", "cat", "Meow", "jumping");
const mytAnimal = new Animal("Chirpy", "bird", "Tweet", "flying");
const myfAnimal = new Animal("Bubbles", "fish", "Blub", "swimming");
myAnimal.introduce();
mysAnimal.introduce();
myAnimal.makeSound();
mysAnimal.makeSound();

mytAnimal.introduce();
mytAnimal.makeSound();
mytAnimal.doAction();

myfAnimal.introduce();
myfAnimal.makeSound();
myfAnimal.doAction();

Animal.kingdomInfo();

class Bird extends Animal {
  fly() {
    console.log(`${this.name} is flying high in the sky!`);
  }
  doAction() {
    if (this.action === "flying") {
      console.log(`${this.name} soars gracefully through the sky!`);
    } else {
      super.doAction();
    }
  }
}
const myBird = new Bird("Chirpy", "bird", "Tweet", "flying");
const mysBird = new Bird("Flappy", "bird", "Chirp", "hopping");
const mytBird = new Bird("Sunny", "bird", "Tweet", "walking");
myBird.introduce();
myBird.makeSound();
myBird.doAction();
myBird.fly();

mysBird.introduce();
mysBird.makeSound();
mysBird.doAction();

mytBird.introduce();
mytBird.makeSound();
mytBird.doAction();

class AnotherPerson {
  constructor(name1, age) {
    this.name1 = name1;
    this._age = age;
  }
  get age() {
    return this._age;
  }
  set age(newAge) {
    if (newAge >= 0) {
      this._age = newAge;
    } else {
      console.log("Age is negative !");
    }
  }
}
const myAnotherPerson = new AnotherPerson("Mia", 25);
myAnotherPerson.age = -1;
console.log(myAnotherPerson.age);
myAnotherPerson.age = 35;
console.log(myAnotherPerson.age);

class CurrencyConverter {
  constructor(amount, currencyType) {
    this.amount = amount;
    this.currencyType = currencyType;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (newAmount >= 0) {
      this._amount = newAmount;
    } else {
      console.log("Amount is not positive");
    }
  }

  converter() {
    const euro = this._amount * 0.9;
    console.log(
      `${this._amount} USD is ${euro.toFixed(2)} ${this.currencyType}`
    );
  }
}
const myEuro = new CurrencyConverter(1, "Euro");
myEuro.converter();

const myEuro1 = new CurrencyConverter(-1, "Euro");
myEuro1.converter();

class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }
  get balance() {
    return this._balance;
  }
  deposit(amount) {
    if (amount >= 0) {
      this._balance += amount;
      console.log(`Deposit successful! Your new balance is ${this._balance}`);
    } else {
      console.log("The deposit amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount <= this._balance) {
      this._balance -= amount;
      console.log(` Your new balance is ${this._balance}`);
    } else {
      console.log("There are not sufficient funds.");
    }
  }
}
const account = new BankAccount(1000);
account.deposit(500);
account.deposit(-1);
account.withdraw(200);
account.withdraw(1700);

class Product {
  constructor(name2, price, description) {
    this._name2 = name2;
    this._description = description;
    this.price = price;
  }
  get name2() {
    return this._name2;
  }
  get price() {
    return this._price;
  }
  get description() {
    return this._description;
  }
  display() {
    console.log(
      `Product: ${this._name2} , Price: ${this._price} , Description: ${this._description}`
    );
  }
  set name2(newName2) {
    this._name2 = newName2;
  }
  set price(newPrice) {
    if (newPrice >= 0) {
      this._price = newPrice;
    } else {
      console.log("Price cannot be negative!");
    }
  }
  set description(newDescription) {
    this._description = newDescription;
  }
}
const myProduct = new Product(
  "Laptop",
  1500,
  "A powerful laptop with Intel i7 processor."
);
myProduct.display();
const myProduct1 = new Product(
  "Laptop",
  -1500,
  "A powerful laptop with Intel i7 processor."
);
myProduct1.display();

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  displayInfo() {
    console.log(`Vehicle: ${this.year} ${this.make} ${this.model}`);
  }
}
class Car extends Vehicle {
  constructor(make, model, year, color, fuelType) {
    super(make, model, year);
    this.color = color;
    this.fuelType = fuelType;
  }
  displayCarInfo() {
    console.log(
      `${this.year} ${this.make} ${this.model}, Color: ${this.color}, Fuel Type: ${this.fuelType}`
    );
  }
}
const myVehicle = new Vehicle("Toyota", "Corolla", 2021);
myVehicle.displayInfo();

const myCar = new Car("Honda", "Civic", 2022, "Red", "Petrol");
myCar.displayCarInfo();

class Auto {
  static manufacturer = "Toyota";
  static getManufacturer() {
    return this.manufacturer;
  }
}
console.log(Auto.getManufacturer());
