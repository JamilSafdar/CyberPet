var inquirer = require('inquirer');

/* Code below to interact with app through terminal */

let pet;
let initQuestions = [
    {
      type: "rawlist",
      name: "type",
      message: "Pick the animal you are fostering:",
      choices: ["Dog", "Cat", "Rabbit"],
    },
    {
    type: "input",
    name: "name",
    message: "Please choose a name for your pet",
    },
  ];

let loopQuestion = [
  {
    type: "rawlist",
    name: "action",
    message: `What would you like to feed or play your pet?`,
    choices: ["Feed", "Play"],
  },
];

const loop = () => {

  inquirer
    .prompt(loopQuestion)
    .then((answers) => {
      if (answers.action === "Feed") {
        console.log("Feed + 10");
        // pet.food()
    } else if (answers.action === "Play") {
        console.log("Play + 10");
        // pet.play()
    } 
    })
    .then(() => loop());
};

const init = () => {
    inquirer.prompt(initQuestions)
        .then((answers) => {
            if (answers.type === "Cat") {
                // pet = new Cat(answers.name)
                console.log("Cat created")
            } else if (answers.type === "Dog") {
                // pet = new Dog(answers.name)
                console.log("Dog created")
            } else {
                // pet = new Rabbit(answers.name)
                console.log("Rabbit created")
            }
        })
        .then(() => loop())
}

init()

/* Code below to interact with app in browser*/

// alert(
//   "Welcome to the world of cyber pets, please ensure you take good care of them"
// );
// let petSelected;
// let namePet;

// const choosePet = () => {
//   petSelected = prompt("Please choose from a dog, cat or rabbit.");
//   if (petSelected.length === 0) {
//     alert("Please choose a pet to continue.");
//     petSelected = prompt("Please choose from a dog, cat or rabbit.");
//   }
//   return alert(`Your chosen pet is a ${petSelected}`);
// };
// choosePet();

// const petName = () => {
//   namePet = prompt(`Now please name your ${petSelected}.`);
//   if (namePet.length === 0) {
//     alert("Please choose a name to continue.");
//     namePet = prompt(`Now please name your ${petSelected}.`);
//   } 
//    return alert(`Your ${petSelected} is now called ${namePet}`); 
// };
// petName();

// const interaction = () => {
//   petInteraction = prompt(`would you like to play or feed ${namePet}.`);
//   if (petInteraction.length === 0) {
//     alert("Please choose a interact with your pet.");
//     petInteraction = prompt(`would you like to play or feed ${namePet}.`);
//   } 
//    return alert(`${namePet} is loving this`); 
// };
// interaction();


// --global/generic variables--

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
    return (
      "You have fed " +
      this.name +
      "and made him this happy " +
      this.showHappinessLevel()
    );
    return (
      "You have played with " +
      this.name +
      "and now " +
      this.name +
      " needs to rest " +
      this.showRestLevel
    );
  }
}
class Cat extends Animal {
  constructor(name, feed, play) {
    super(name);
    this.feed = feed;
    this.play = play;
  }
  show() {
    return (
      "You have made " + this.name + "this happy " + this.showHappinessLevel()
    );
  }
}
class Rabbit extends Animal {
  constructor(name, feed, play) {
    super(name);
    this.feed = feed;
    this.play = play;
  }
  show() {
    return (
      "You have made " + this.name + "this happy " + this.showHappinessLevel()
    );
  }
}



