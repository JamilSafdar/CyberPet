var inquirer = require('inquirer');

/* Code below to interact with app through terminal */

let pet;
let happinessLevel = 20;
let restLevel = 20;
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
    message: `Would you like your animal to eat, play or rest?`,
    choices: ["Feed", "Play", "Rest"],
  },
];

const loop = () => {

  inquirer
    .prompt(loopQuestion)
    .then((answers) => {
      
       if (answers.action === "Feed") {
       if(happinessLevel < 100) {
         happinessLevel += 10;
       }
        console.log(`your pet is ${happinessLevel}/100 happy`);
        // pet.food()
    } else if (answers.action === "Play") {
      if(restLevel <= 100 && restLevel > 10) {
        restLevel -= 10;
        happinessLevel += 10;
      }
       console.log(`your pets energy level is ${restLevel}/100`);
       console.log(`your pet is ${happinessLevel}/100 happy`);
        // pet.play()
    } else if (answers.action === "Rest") {
      if(restLevel < 100) {
        restLevel += 10;
      }
       console.log(`your pets energy level is ${restLevel}/100`);
       console.log(`your pet is ${happinessLevel}/100 happy`);
       //pet.rest()
    } 
    if (happinessLevel >= 80 && restLevel >= 80) {
      console.log(`Congratulations! You have made your pet happy and they are ready to be homed.`);
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
        .then(() => loop());
      }    

// const init2 = () => {
//   if (happinessLevel >= 80 && restLevel >= 80) {
//     console.log(`Congratulations! You have made your pet happy and they are ready to be homed.`);
//     return init2();
//   }
// }

init();
// init2();

// const WantToExit = () =>
//   inquirer
//     .prompt([
//       {
//         name: "moreQuery",
//         type: "confirm",
//         message: "Want to do anything else?",
//       },
//     ])
//     .then((answer) => {
//       if (answer.moreQuery) return init();
//     });


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
    this._endOfGame = endGame;
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
}
const showEndGame = (endGame) => {
  if (happinessLevel > 80 && restLevel > 80) {
    return (
      `you have made ${this.name} happy! They are ready to move to their new home.`
    )
  }
};

class Dog extends Animal {
  constructor(name, feed, play) {
    super(name);
    this.feed = feed;
    this.play = play;
    this.rest = rest;
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
    this.rest = rest;
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
    this.rest = rest;
  }
  show() {
    return (
      "You have made " + this.name + "this happy " + this.showHappinessLevel()
    );
  }
}



