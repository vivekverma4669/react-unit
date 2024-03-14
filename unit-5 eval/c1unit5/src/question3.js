// Problem no. 10
class Character {}
class Warrior {}

// // Example Invocation
// const character1 = new Character("Enemy", 50, 15);
// const warrior1 = new Warrior("Hero", 100, 20, "sword", "plate armor");

// console.log(character1); //Character { name: 'Enemy', health: 50, attackPower: 15 }
// console.log(warrior1); // Warrior {name: 'Hero',health: 100,attackPower: 20,weapon: 'sword',armor: 'plate armor }

// // Warrior attacks character
// warrior1.attack(character1);
// console.log("Character after warrior's attack:");
// console.log(character1); //Character { name: 'Enemy', health: 20, attackPower: 15 }

// // Warrior defends
// warrior1.defend();
// console.log(warrior1); // Warrior {name: 'Hero',health: 110,attackPower: 30,weapon: 'sword',armor: 'plate armor'}

// // Check if character and warrior are alive
// console.log("Is character alive?", character1.isAlive()); // true
// console.log("Is warrior alive?", warrior1.isAlive()); // true

// Problem no. 11

// Generic Media class
class Media {
  #mediaType;

  constructor() {}

  // Getter for mediaType
  get mediaType() {}

  // Setter for mediaType
  set mediaType(value) {}
}

// Book class inheriting from Media
class Book  {
  #title;
  #author;
  #publicationYear;
  #availableCopies;

  constructor() {
  }

  // Getters and setters for Book properties
  get title() {
 
  }

  set title(value) {
  }
  get author() {
  }

  set author(value) {
  }
  get publicationYear() {
  }

  set publicationYear(value) {
  }
  get availableCopies() {
  }

  set availableCopies(value) {
  }

  // Static method to compare publication years of two books
  static comparePublicationYears(book1, book2) {
  }
}

// User class
class User {
  #firstName;
  #lastName;
  #borrowedBooks;

  constructor() {

  }

  // Getters and setters for User properties
  get firstName() {
    
  }

  set firstName(value) {
   
  }
  get lastName() {
   
  }

  set lastName(value) {
  }


  // Method to borrow a book
  borrowBook(book) {
  }

  // Method to return a book
  returnBook(book) {
  }

  // Static method to get the full name of a user
  static fullName(user) {
  }
}

// Example usage
// const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, 5);
// const book2 = new Book("1984", "George Orwell", 1949, 10);

// const user1 = new User("Alice", "Smith");
// const user2 = new User("Bob", "Johnson");

// console.log("User 1 full name:", User.fullName(user1)); // Alice Smith

// user1.borrowBook(book1);
// console.log("Book1 availableCopies:", book1.availableCopies); // 4

// user1.borrowBook(book2);
// console.log("Book 2 availableCopies:", book2.availableCopies); // 9

// console.log(
//   "Comparing publication years:",
//   Book.comparePublicationYears(book1, book2)
// ); // 1

// user1.returnBook(book1);
// console.log("Book 1 availableCopies after return:", book1.availableCopies); // 5


//don't remove below export statement part
export { Character, Warrior, Media, Book, User };
