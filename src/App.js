//----------React----------//
import React from "react";

//----------Widgets----------//
import Stock from "./components/widgets/Stock";
import Pet from "./components/widgets/Pet";
import Note from "./components/widgets/Note";
import AdBiquidity from "./components/widgets/AdBiquidity";
import AdCharge from "./components/widgets/AdCharge";
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
      widgets: [
        { id: "a", content: <Pet />, size: 1 },
        {
          id: "b",
          content: (
            <Stock
              ticker="TSLA"
              name="Tesla Inc"
              price="$1,337"
              priceChange="42"
            />
          ),
          size: 1,
        },
        {
          id: "c",
          content: (
            <Stock
              ticker="MSFT"
              name="Microsoft Corp"
              price="$288"
              priceChange="-4"
            />
          ),
          size: 1,
        },
        {
          id: "d",
          content: (
            <Stock
              ticker="ETH"
              name="Ethereum"
              price="$420"
              priceChange="-14"
            />
          ),
          size: 1,
        },
        { id: "e", content: <Note />, size: 2 },
        { id: "f", content: <AdBiquidity />, size: 1 },
        { id: "g", content: <Pet />, size: 1 },
        { id: "h", content: <AdCharge />, size: 1 },
        { id: "i", content: "Youtube", size: 1 },
        { id: "k", content: "Game", size: 1 },
        { id: "l", content: "Clock", size: 1 },
      ],
    };
  }

  //Receive widgetType from SideBar.js and add newWidget to widgets
  handleWidget = (widgetType) => {
    const newWidget = {
      id: Math.floor(Math.random() * 100),
      content: widgetType, // Assuming widgetType is a string
      size: 1,
    };

    this.setState({
      widgets: [newWidget, ...this.state.widgets],
    });
  };
  //Receive updated widgets from Dashboard.js after swap and input back to Widgets
  updateWidget = (updatedWidgets) => {
    this.setState(
      {
        widgets: updatedWidgets,
      },
      () => {
        console.log("Final Widgets", this.state.widgets);
      },
    );
  };
  //Delete last widget in the list (To be improved)
  deleteWidget = () => {
    const removeWidget = [...this.state.widgets];
    removeWidget.pop();
    this.setState({
      widgets: removeWidget,
    });
  };

  render() {
    return (
      <div className="flex min-h-screen flex-col justify-center bg-[url('./Icons/background.png')] bg-contain bg-left-top pb-20">
        <header className="fixed top-0 flex w-full flex-row items-center justify-between bg-sky-800 p-2 shadow-md">
          <SideBar widget={this.handleWidget} />
          <StartScreen />
          <SignUp />
        </header>
        <div className="mb-[40px] mt-[80px] self-center">
          <Dashboard
            widgets={this.state.widgets}
            updateWidget={this.updateWidget}
          />
        </div>

        <footer className="fixed bottom-0 flex w-full flex-row justify-center bg-sky-100 p-2 shadow-md">
          <p className="text-xs text-slate-700">Made by Gabriel Lim 🐷</p>{" "}
          <button className=" pl-10 text-xs" onClick={this.deleteWidget}>
            Delete
          </button>
        </footer>
      </div>
    );
  }
}

export default App;
