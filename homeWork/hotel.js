
class Guest {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}

class Room {
  constructor(id) {
    this.id = id;
    this.guests = [];
    this.maxGuests = 4;
  }

  deleteGuest(guestId) {
    const guestIndex = this.guests.findIndex((guest) => guest.id === guestId);
    if (guestIndex !== -1) {
      this.guests.splice(guestIndex, 1);
      console.log(
        `Guest with ID ${guestId} has been removed from room ${this.id}`
      );
    }
  }

  updateGUest(guestId, newName) {
    const guest = this.guests.find((guest) => guest.id === guestId);
    if (guest) {
      guest.name = newName;
      console.log(guest.name + " has been updated to " + newName);
    }
  }

  addGuest(guest) {
    if (this.guests.length < this.maxGuests) {
      this.guests.push(guest);
      console.log(`Guest ${guest.name} added to room ${this.id}`);
    } else {
      console.log(`Room ${this.id} is full`);
    }
  }
}

class Hotel {
  constructor(name) {
    this.name = name;
    this.rooms = [];
    this.maxRooms = 10;
  }

  addRoom(room) {
    this.rooms.push(room);
    console.log(`Room ${room.id} added`);
  }
  deleteRoom(roomId) {
     const roomIndex = this.rooms.findIndex((room) => room.id === roomId);
    if (roomIndex !== -1) {
      this.rooms.splice(roomIndex, 1);
      console.log(`Room ${roomIndex} deleted`);
    } else("could not find room");
  }
}

const guest1 = new Guest("Bob1", 1);
const guest2 = new Guest("Bob2", 2);
const guest3 = new Guest("Bo3", 3);
const room1 = new Room(1); // Removed the redundant parameter
const hotel1 = new Hotel("Hilton");

hotel1.addRoom(room1);
room1.addGuest(guest1);

// room1.updateGUest(1, "neBOB");
// room1.deleteGuest(1);
console.log(hotel1);
console.log("--------------------------------");

hotel1.deleteRoom(1);

console.log(JSON.stringify(hotel1, null, 2)); // Improved logging for hotel object

console.log("");
console.log("end================================>");
console.log("");
