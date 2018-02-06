// data store
let store = {drivers: [], passengers: [], trips: []};
// let store = {
//   drivers: [
//     {id: 1, name: "bob"},
//     {id: 2, name: "sam"}
//   ],
//   passengers: [
//     {id: 1, name: "cate"},
//     {id: 2, name: "silas"},
//     {id: 3, name: "billy"}
//   ],
//   trips: [
//     {id: 1, driverId: 1, passengerId: 2},
//     {id: 2, driverId: 1, passengerId: 1},
//     {id: 3, driverId: 2, passengerId: 1},
//     {id: 4, driverId: 2, passengerId: 3}.
//     {id: 5, driverId: 2, passengerId: 2},
//   ]
// }


// counters for unique ids
let driverId = 0;
let passengerId = 0;
let tripId = 0;

// Drivers class
class Driver{
  constructor(name){
    this.id = ++driverId;
    this.name = name;

    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.driverId = this.id;
    });
  }

  passengers() {
    return this.trips().map(trip => {
      return trip.passenger();
    })
  }
}

// Passengers class
class Passenger{
  constructor(name){
    this.id = ++driverId;
    this.name = name;

    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId = this.id;
    });
  }

  drivers() {
    return this.trips().map(trip => {
      return trip.driver();
    })
  }
}

// Trip class
class Trip {
  constructor(driver, passenger){
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;

    store.trips.push(this);
  }

  driver(){
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    })
  }

  passenger(){
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    })
  }
}
