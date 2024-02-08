class DateFactory {
    static getDate() {
        let day = Math.floor(Math.random() * 28) + 1;
        let month = Math.floor(Math.random() * 12); // 0-11 for Jan-Dec
        let year = Math.floor(Math.random() * (2020 - 1900 + 1)) + 1900; // Example range: 1900-2020

        return new Date(year, month, day);
    }
}

class Person {
    static id = 0;

    constructor() {
        Person.id++;
        this.id = Person.id;
        this.name = "name " + this.id;
        this.birthDay = DateFactory.getDate();
    }
}

class BirthdayTask {

}

class BirthdaySystemReminder {
    constructor() {
        this.people = new Set();
        this.task = new BirthdayTask;
    }

    showMen

}

const p1 = new Person();
const p2 = new Person();
console.log(p1);
console.log(p2);
