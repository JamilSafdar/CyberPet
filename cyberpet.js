
alert("Welcome to the world of cyber pets, please ensure you take good care of them");

const choosePet = () => {
  petSelected = prompt("Please choose from a dog, cat or rabbit.");
  if (petSelected.length === 0) {
     alert("Please choose a pet to continue.");
     petSelected = prompt("Please choose from a dog, cat or rabbit.");   
  } else {
    return alert(`Your chosen pet is a ${petSelected}`); //this currently isnt working
  }
};
choosePet();

const petName = () => {
  namePet = prompt(`Now please name your ${petSelected}.`);
  if (namePet.length === 0) {
    alert("Please choose a name to continue.");
    namePet = prompt(`Now please name your ${petSelected}.`);  
 } else {
   return alert(`Your ${petSelected} is now called ${namePet}`); //this currently isnt working
 }
};
petName();

// --global/generic variables--
    // this._event = event;
    // this._endOfGame = endGame;
    // this._checkIn = checkOnAnimal;
    // this._happinessLevel = 0;
    // this._rest = rest;
    // this._restLevel = 0;
class Animal {
  constructor(petName) {
    this._petName = petName;
  }

  get event() {
    return this._event;
  }
  get endGame() {
    return this._endOfGame;
  }
  get feed() {
    return this._feed;
  }

  get play() {
    return this._play;
  }

  get checkIn() {
    return this._checkIn;
  }

  get happinessLevel() {
    return this._happinessLevel;
  }

  get rest() {
    return this._rest;
  }

  get restLevel() {
    return this._restLevel;
  }
}

const showHappinessLevel = (feed, play) => {
  for (let i = 0; i <= happinessLevel; i++) {
    feed += happinessLevel;
  }
  for (let i = 0; i <= happinessLevel; i++) {
    play += happinessLevel;
  }
};
const showRestLevel = (rest, play) => {
  for (let i = 0; i <= restLevel; i++) {
    rest += restLevel;
  }
  for (let i = 0; i <= restLevel; i--) {
    play -= restLevel;
  }
};
class Dog extends Animal {
  constructor(name, feed, play) {
    super(name);
    this.feed = feed;
    this.play = play;
  }
  show() {
    return 'You have fed ' + this.name + 'and made him this happy ' + this.showHappinessLevel();
    return 'You have played with ' + this.name + 'and now ' + this.name + ' needs to rest ' + this.showRestLevel;
  }
}
class Cat extends Animal {
  constructor(name, feed, play) {
    super(name);
    this.feed = feed;
    this.play = play;
  }
  show() {
    return 'You have made ' + this.name + 'this happy ' + this.showHappinessLevel();
  }
}
class Rabbit extends Animal {
  constructor(name, feed, play) {
    super(name);
    this.feed = feed;
    this.play = play;
  }
  show() {
    return 'You have made ' + this.name + 'this happy ' + this.showHappinessLevel();
  }
}