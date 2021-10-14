var inquirer = require('inquirer');
inquirer
  .prompt([
    {
    /* type: list,
    message: "Pick the animal you are fostering:",
    name: "Animal",
    choices: ["dog", "cat", "rabbit"]
     */
  }
  ])
  .then((answers) => {
    /*
    if (answers.animal === "dog") {
      
    }
    */
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



let input = prompt("input your details here:");
console.log(input);
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

//this is a test for the pull request on github