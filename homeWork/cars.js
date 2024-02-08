class Car {
  constructor(number) {
    this.number = number;
    this.speed = Math.random() * 150; // Speed is randomly assigned here but overridden in subclasses
  }
}

class SimpleCar extends Car {
  constructor(number) {
    super(number);
    this.speed = 50; // Fixed speed for SimpleCar
  }
}

class GodCar extends Car {
  constructor(number) {
    super(number);
    this.speed = 100; // Fixed speed for GodCar
  }
}

class Highway {
  constructor(name) {
    this.name = name;
    this.cars = []; // Initialize with an empty array
  }

  addCar(car) {
    if (this.cars.length < 100) {
      this.cars.push(car);
    } else {
      console.error("Cannot add more cars to the highway");
    }
  }
}

class Country {
  constructor(name) {
    this.name = name;
    this.highways = []; // Initialize with an empty array
  }

  addHighway(highway) {
    if (this.highways.length < 5) {
      this.highways.push(highway);
    } else {
      console.error("Cannot add more highways to the country");
    }
  }
}

function initiate() {
  let countries = []; // Initialize countries array

  for (let i = 1; i <= 3; i++) {
    // For 3 countries
    let country = new Country(`Country ${i}`);
    for (let e = 1; e <= 3; e++) {
      // Each country with 3 highways
      let highway = new Highway(`Highway ${e}`);
      for (let j = 1; j <= 10; j++) {
        // Each highway with 10 cars
        let carType =
          j % 2 === 0
            ? new SimpleCar(`SimpleCar ${j}`)
            : new GodCar(`GodCar ${j}`);
        highway.addCar(carType);
      }
      country.addHighway(highway);
    }
    countries.push(country);
  }
  return countries;
}

let countries = initiate();
console.log(countries); // This will print the structure of the countries array to the console
