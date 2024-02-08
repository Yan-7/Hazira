
class Library {
    constructor(name, adress, books) {
        this.name = name;
        this.adress = adress;
        this.books = books;
    }
}

class Book {
    constructor(bookName, author, libary) {
        this.bookName = bookName;
        this.author = author;
        this.libary = libary;
    }
}

class LibraryService {
    libaries = [];
    
    addLibrary(name, address, books) {
        const libary = new Libary(name, address, books);
        this.libaries.push(libary);
    }
}

const Library1 =  new Libary("l1", "here", [])
let book1 = new Book("Book 1", "bob", Library1);
