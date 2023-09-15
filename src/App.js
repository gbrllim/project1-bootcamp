//----------React----------//
import React from "react";

//----------Pages----------//

//----------Components----------//
import StartScreen from "./components/StartScreen";
import SideBar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
//----------Styling----------//
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="flex min-h-screen flex-col bg-slate-100">
        <StartScreen />
        <header className="fixed top-0 flex w-full flex-row items-center justify-between bg-sky-800 p-2 text-center shadow-md">
          <SideBar />
          <h1 className="text-xl font-bold text-slate-100">Dashboard 🔭</h1>
          <p className="text-transparent">BTC</p>
        </header>
        <div className="mb-[40px] mt-[80px] max-w-[1024px] self-center">
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
