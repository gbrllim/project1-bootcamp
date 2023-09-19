//----------React----------//
import React from "react";

//----------Pages----------//

//----------Components----------//
import StartScreen from "./components/StartScreen";
import SignUp from "./details/SignUp";
import SideBar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
//----------Styling----------//
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showStartScreen: true,
    };
  }

  toggleStartScreen = () => {
    this.setState({
      showStartScreen: !this.state.showStartScreen,
    });
    console.log("start scren");
  };

  render() {
    return (
      <div className="flex min-h-screen flex-col justify-center bg-[url('./Icons/background.png')] bg-contain bg-left-top pb-20">
        {this.state.showStartScreen && <StartScreen />}
        <header className="fixed top-0 flex w-full flex-row items-center justify-between bg-sky-800 p-2 shadow-md">
          <SideBar />
          <button
            onClick={this.toggleStartScreen}
            className="text-xl font-bold text-slate-100"
          >
            Dashboard 🔭
          </button>
          <SignUp />
        </header>
        <div className="mb-[40px] mt-[80px] self-center">
          <Dashboard />
        </div>

        <footer className="fixed bottom-0 w-full bg-red-100 p-2 text-center shadow-md">
          <p className="text-xs text-slate-700">Made by Gabriel Lim 🐷</p>
        </footer>
      </div>
    );
  }
}

export default App;
