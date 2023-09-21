// src/MemoryGame.js
import React, { Component } from "react";
import "./MemoryGame.css";

export default class MemoryGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sequence: [],
      userSequence: [],
      score: 0,
      highScore: 13,
      buttonDisabled: true,
      buttonStates: {
        button1: false,
        button2: false,
        button3: false,
        button4: false,
      },
    };
  }

  // Function to start a new game
  startGame = () => {
    this.setState(
      {
        sequence: [],
        userSequence: [],
        score: 0,
      },
      () => {
        this.generateSequence();
      },
    );
  };

  // Function to generate a new sequence
  generateSequence = () => {
    const newSequence = [...this.state.sequence];
    newSequence.push(this.getRandomButton());
    console.log("newSquence", newSequence);
    this.setState({ sequence: newSequence }, () => {
      this.showSequence();
    });
  };

  // Function to get a random button
  getRandomButton = () => {
    const buttons = ["button1", "button2", "button3", "button4"];
    const randomIndex = Math.floor(Math.random() * 4);
    return buttons[randomIndex];
  };

  // Function to show the sequence
  showSequence = () => {
    const { sequence } = this.state;
    let i = 0;
    this.setState({ buttonDisabled: true }); // Disable buttons during the sequence

    const interval = setInterval(() => {
      console.log(sequence[i]);
      this.lightButton(sequence[i]);
      i++;
      if (i >= sequence.length) {
        clearInterval(interval);
        this.setState({ buttonDisabled: false }); // Enable buttons after the sequence
      }
    }, 1000);
  };

  // Function to light up a button
  lightButton = (button) => {
    // Get the button element by its ID or other unique identifier
    const buttonElement = document.getElementById(button);
    console.log("buttonElement", buttonElement);

    if (buttonElement) {
      // Set the button's state to "lit"
      const buttonStates = { ...this.state.buttonStates };
      buttonStates[button] = true;
      this.setState({ buttonStates });

      // Turn off the button after a delay (e.g., 500ms)
      setTimeout(() => {
        // Reset the button's state to not "lit"
        buttonStates[button] = false;
        this.setState({ buttonStates });
      }, 500);
    }
  };

  // Function to handle button click
  handleButtonClick = (button) => {
    const { userSequence, sequence, highScore, buttonDisabled } = this.state;
    const nextButton = sequence[userSequence.length];
    if (buttonDisabled) {
      return;
    }

    if (button === nextButton) {
      // Correct button pressed
      const newUserSequence = [...userSequence, button];

      this.setState({ userSequence: newUserSequence }, () => {
        if (newUserSequence.length === sequence.length) {
          // User completed the round
          this.setState({ score: newUserSequence.length, userSequence: [] });
          if (newUserSequence.length >= highScore) {
            // Update high score if necessary
            this.setState({ highScore: newUserSequence.length });
          }
          this.generateSequence(); // Start the next round
        }
      });
    } else {
      alert("Wrong Input! Game will be reset");
      this.startGame();
      // You can add code here to handle an incorrect button press (e.g., end the game)
    }
  };

  render() {
    const { score, highScore, buttonDisabled } = this.state;

    return (
      <div className="h-[160px] w-[160px] rounded-xl bg-gradient-to-b from-sky-800 to-slate-600">
        <header className="text-xs text-white">
          <h1 className="text-center font-bold">
            🧠 Brain Train <button onClick={this.startGame}>🧠</button>
          </h1>
          <p className="text-center">
            Score: {score} High Score: {highScore}
          </p>
        </header>
        <div className="button-container grid grid-cols-2 items-center justify-center gap-1 pl-3">
          {/* Render the 4 identical buttons */}
          <button
            className={`h-[60px] w-[60px] rounded-md bg-white ${
              this.state.buttonStates.button1 ? "lit-button" : ""
            }`}
            onClick={() => this.handleButtonClick("button1")}
            disabled={this.state.buttonDisabled}
          ></button>
          <button
            className={`h-[60px] w-[60px] rounded-md bg-white ${
              this.state.buttonStates.button2 ? "lit-button" : ""
            }`}
            onClick={() => this.handleButtonClick("button2")}
            disabled={this.state.buttonDisabled}
          ></button>
          <button
            className={`h-[60px] w-[60px] rounded-md bg-white ${
              this.state.buttonStates.button3 ? "lit-button" : ""
            }`}
            onClick={() => this.handleButtonClick("button3")}
            disabled={this.state.buttonDisabled}
          ></button>
          <button
            className={`h-[60px] w-[60px] rounded-md bg-white ${
              this.state.buttonStates.button4 ? "lit-button" : ""
            }`}
            onClick={() => this.handleButtonClick("button4")}
            disabled={this.state.buttonDisabled}
          ></button>
        </div>
      </div>
    );
  }
}
