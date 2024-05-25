//. No. 1
function countWords(sentences, words) {
  let total = 0;
  for (let i = 0; i < sentences.length; i++) {
    if (sentences.slice(i, i + words.length) === words) {
      total++;
    }
  }
  return total;
}

//No. 2
function formatSentence(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

//No. 3
//???

//No. 4
// soal: 1,5,4,2,7,6,3,9,8,4,11,
//jawaban: angka yang melengkapi adalah: 4,11

//No. 5
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.engineStarted = false;
  }

  startEngine() {
    this.engineStarted = true;
    console.log(`The ${this.make} ${this.model} engine has started.`);
  }

  stopEngine() {
    this.engineStarted = false;
    console.log(`The ${this.make} ${this.model} engine has stopped.`);
  }

  displayInfo() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  }
}

// Create car objects
let car1 = new Car("Toyota", "Camry", 2020);
let car2 = new Car("Honda", "Civic", 2018);

// Start the car engine
car1.startEngine(); // Output: The Toyota Camry engine has started.

// Display car information
car2.displayInfo(); // Output: Make: Honda, Model: Civic, Year: 2018

// Stop the car engine
car1.stopEngine(); // Output: The Toyota Camry engine has stopped.
