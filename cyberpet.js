let input = prompt("input your details here:");
console.log(input);

class Animal {
  constructor(name) {
    this._name = name;
    this._event = event;
    this._endOfGame = endGame;
    this._feed = feed;
    this._play = play;
    this._checkIn = checkOnAnimal;
    this._happinessLevel = 0;
    this._rest = rest;
    this._restLevel = 0;
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
  for (let i = 0; i < happinessLevel; i++) {
    feed += happinessLevel;
  }
  for (let i = 0; i < happinessLevel; i++) {
    play += happinessLevel;
  }
};
