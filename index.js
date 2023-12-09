class Spaceship {
 constructor(name, type, yearBuilt) {
  this.name = name;
  this.type = type;
  this.yearBuilt = yearBuilt;
 }

 calculateTravelSpeed() {
  throw new Error(
   "Abstract method 'calculateTravelSpeed' must be implemented in derived classes"
  );
 }

 getShipInfo() {
  return `${this.name} - ${this.type} (${this.yearBuilt})`;
 }

 launch() {
  console.log(`${this.name} is launching into space!`);
 }
}

class CargoShip extends Spaceship {
 constructor(name, yearBuilt, cargoCapacity) {
  super(name, "Cargo Ship", yearBuilt);
  this.cargoCapacity = cargoCapacity;
 }

 calculateTravelSpeed() {
  // Реалізація логіки розрахунку швидкості для вантажного корабля
  return "Calculating travel speed for Cargo Ship...";
 }

 getCargoCapacity() {
  return `Cargo capacity: ${this.cargoCapacity} tons`;
 }
}

class PassengerShip extends Spaceship {
 constructor(name, yearBuilt, passengerCapacity) {
  super(name, "Passenger Ship", yearBuilt);
  this.passengerCapacity = passengerCapacity;
 }

 calculateTravelSpeed() {
  // Реалізація логіки розрахунку швидкості для пасажирського корабля
  return "Calculating travel speed for Passenger Ship...";
 }

 getPassengerCapacity() {
  return `Passenger capacity: ${this.passengerCapacity} passengers`;
 }
}

function main() {
 const spaceships = [
  new CargoShip("Galactic Hauler", 2022, 5000),
  new PassengerShip("Stellar Cruise", 2023, 200),
  new CargoShip("Interstellar Transporter", 2021, 8000),
 ];

 for (const spaceship of spaceships) {
  spaceship.launch();
  console.log(spaceship.getShipInfo());
  console.log(spaceship.calculateTravelSpeed());
  console.log("--------------------------");
 }
}

// Виклик функції main
main();
