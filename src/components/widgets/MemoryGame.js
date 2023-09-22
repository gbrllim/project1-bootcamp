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
      message: "Press start to begin",
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
        message: "Watch carefully",
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
    this.setState({ sequence: newSequence, message: "Watch carefully", }, () => {
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
      this.lightButton(sequence[i]);
      i++;
      if (i >= sequence.length) {
        clearInterval(interval);
         setTimeout(() => {
        this.setState({ buttonDisabled: false, message: "Your Turn!" }); // Enable buttons after a 500ms delay
      }, 1000);
      }
    }, 800);
  };

  

  // Function to light up a button
  lightButton = (button) => {
      // Set the button's state to "lit"
      const buttonStates = { ...this.state.buttonStates };
      buttonStates[button] = true;
      this.setState({ buttonStates });

      setTimeout(() => {
        // Reset the button's state to not "lit"
        buttonStates[button] = false;
        this.setState({ buttonStates });
      }, 400);
    
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
      
      //On click - light up for 200ms
      const buttonStates = { ...this.state.buttonStates };
      buttonStates[button] = true;
      this.setState({ buttonStates });
      setTimeout(() => {
        // Reset the button's state to not "lit"
        buttonStates[button] = false;
        this.setState({ buttonStates });
      }, 200);

      this.setState({ userSequence: newUserSequence }, () => {
        if (newUserSequence.length === sequence.length) {
          // User completed the round -> Add 1 round
          this.setState({ score: newUserSequence.length, userSequence: [] });
          if (newUserSequence.length >= highScore) {
            // Update high score if necessary
            this.setState({ highScore: newUserSequence.length });
          }
          this.generateSequence(); // Start the next round
        }
      });
    } else {
      this.setState({
        message:"Wrong! Start to reset",
        buttonDisabled: true, 
      });
    }
  };

  render() {
    const { score, highScore, buttonDisabled } = this.state;
  

    return (
      <div className="h-[160px] w-[160px] rounded-xl bg-gradient-to-b from-sky-800 to-slate-500">
        <header className="text-xs text-white">
          <h1 className="text-center font-bold mt-1">
             <button onClick={this.startGame}>🧠 Start 🧠</button>
          </h1>
          <p className="text-center">
            Round: {score} High Score: {highScore}
          </p>
        </header>
        <message className="text-xs text-white text-center animate-pulse flex justify-center items-center ">
          <p className="m-1.5 border-2 p-0 w-5/6">{this.state.message}</p>
        </message>
        <div className="button-container grid grid-cols-2 items-center justify-center gap-1 pl-1.5">
          {/* Render the 4 identical buttons */}
          <button
            className={`h-[40px] w-[70px] rounded-md  ${
              this.state.buttonStates.button1 ? "bg-green-400" : "bg-slate-300"
            }`}
            onClick={() => this.handleButtonClick("button1")}
            disabled={this.state.buttonDisabled}
          ></button>
          <button
            className={`h-[40px] w-[70px] rounded-md  ${
              this.state.buttonStates.button2 ? "bg-green-400" : "bg-slate-300"
            }`}
            onClick={() => this.handleButtonClick("button2")}
            disabled={this.state.buttonDisabled}
          ></button>
          <button
            className={`h-[40px] w-[70px] rounded-md  ${
              this.state.buttonStates.button3 ? "bg-green-400" : "bg-slate-300"
            }`}
            onClick={() => this.handleButtonClick("button3")}
            disabled={this.state.buttonDisabled}
          ></button>
          <button
            className={`h-[40px] w-[70px] rounded-md  ${
              this.state.buttonStates.button4 ? "bg-green-400" : "bg-slate-300"
            }`}
            onClick={() => this.handleButtonClick("button4")}
            disabled={this.state.buttonDisabled}
          ></button>
        </div>
      </div>
    );
  }
}
