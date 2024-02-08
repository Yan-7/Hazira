class Person {
  static clientId = 0;

  constructor(name, age) {
    this.id = ++Person.clientId;
    this.name = name;

    if (age > 16) {
      this.age = age; // Age needs to be >16
    } else {
      throw new Error("Age is too small");
    }
  }
}

class Client extends Person {
  constructor(name, age,  balance) {
    super(name, age); // Pass name and age to the parent constructor
    this.interestRate = 0.1;
    this.balance = balance;
  }
    
    withdraw(amount) {
      if (amount <= 0) {
        throw new Error("balance must be positive");
      }
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log("account withdrawn");
      } else {
        // Handle case where balance is insufficient
        console.log("Insufficient balance");
      }
    }
    
    deposit(amount) {
      this.balance += amount;
      console.log(amount + " added to account " + this.balance);
    }
}



class BankSystem {
  constructor() {
    this.clients = new Map();
  }
  showMenu() {
    console.log("menu");
  }
  startSystem() {
    console.log("system starts running");
  }

  getClient(clientId) {
    
    let client = this.clients.get(clientId);
    if (client != null) {
      console.log("clients details: " + client.id + " " + client.name + " " + client.balance);
    } else {console.log("did not find client");}
  }

  addClient(client) {
    if (this.clients.has(client.id)) {
      console.log("client already exists");
      return;
    }
    this.clients.set(client.id, client);
    console.log("client " + client.id +" added to system");
  }

  deleteClient(id) {
    if (this.clients.has(id)) {
      this.clients.delete(id);
      console.log("client deleted");
    } else {
      console.log("could not find client");
    }
  }

  getRichesClient() {
    let highest = 0;
    let richest = null;
    for (const client of this.clients.values()) {
      if (client.balance > highest) {
        highest = client.balance;
        richest = client;
      }
    }
    console.log("Richest is: ", richest);
  }

  printAllClients() {
    console.log("printing clients");
    this.clients.forEach((client) => {
      console.log(client);
    });
  }
}

// BankStatistics
// Methods
//  countMembers(): static int
//  getBankBalance(): static double
//  getRichestClient(List<Person> clients): static Client
//  printPoorestClient(List<Person> clients): static Client

// app ----------------------------------------------------------------
// app ----------------------------------------------------------------
const app = new BankSystem();
p1 = new Client("Bob1", 23, 100); // Create a regular client
p2 = new Client("Bob2", 30, 200); // Create a VIP client
p3 = new Client("Bob3", 30, 300); // Create a VIP client


app.addClient(p1);
// app.addClient(p2);
// app.addClient(p3);
p1.deposit(5000)
app.getClient(1);

p1.withdraw(500);

app.getClient(1);

// app.getRichesClient();

// app.printAllClients();
