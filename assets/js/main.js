"use strict";

import "babel-polyfill";

Array.prototype.getRandomValue = inputArray => {
  return inputArray[Math.floor(Math.random() * inputArray.length)];
};

document.addEventListener("DOMContentLoaded", function() {
  class Ticker {
    constructor(setup) {
      this.mainElement = setup.mainElement;
      this.buttonIncrease = setup.buttonIncrease;
      this.buttonDecrease = setup.buttonDecrease;
      this.start = setup.start;
      this.current = this.start;
      this.goal = setup.goal;
      this.targetInput = setup.targetInput;

      this.addEvents();
      this.init();
    }

    addEvents = () => {
      this.buttonIncrease.addEventListener("click", this.increase);
      this.buttonDecrease.addEventListener("click", this.decrease);
      this.targetInput.addEventListener("change", this.setGoal);
    };

    init = () => {
      this.mainElement.innerHTML = this.start;
    };

    setGoal = e => {
      this.goal = e.target.value;
    };

    increase = () => {
      this.current += 1;
      this.mainElement.innerHTML = this.current;
      this.checkGoal();
    };

    decrease = () => {
      this.current -= 1;
      this.mainElement.innerHTML = this.current;
      this.checkGoal();
    };

    checkGoal = () => {
      if (this.current == this.goal) {
        this.targetHit();
      } else {
        this.targetMissed();
      }
    };

    targetHit = () => {
      alert("targetHit");
    };

    targetMissed = () => {
      console.log("targetMissed");
    };
  }

  const ticker = new Ticker({
    mainElement: document.getElementById("tickerCount"),
    buttonIncrease: document.getElementById("increaseButton"),
    buttonDecrease: document.getElementById("decreaseButton"),
    targetInput: document.getElementById("targetInput"),
    start: 0,
    goal: 5
  });

  ticker.targetHit = () => {
    const successMessageElement = document.getElementById("successMessage");
    successMessageElement.style.display = "flex";
  };

  ticker.targetMissed = () => {
    const successMessageElement = document.getElementById("successMessage");
    successMessageElement.style.display = "none";
  };
});
