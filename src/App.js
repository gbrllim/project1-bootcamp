//----------React----------//
import React from "react";
//----------Widgets----------//
import Stock from "./components/widgets/Stock.js";
import Pet from "./components/widgets/Pet.js";
import NoteList from "./components/widgets/NoteList.js";
import AdBiquidity from "./components/widgets/AdBiquidity.js";
import AdCharge from "./components/widgets/AdCharge.js";
import MemoryGame from "./components/widgets/MemoryGame.js";
import MarketData from "./components/widgets/MarketData.js";
import Clock from "./components/widgets/Clock.js";

//----------Components----------//
import StartScreen from "./components/StartScreen.js";
import SignUp from "./details/SignUp.js";
import SideBar from "./components/Sidebar.js";
import Dashboard from "./components/Dashboard.js";
//----------Styling----------//
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeZone: "Asia/Singapore",
      widgets: [
        {
          id: "i",
          content: <Clock />,
          size: 1,
        },
        { id: "a", content: <Pet />, size: 1 },
        {
          id: "b",
          content: <Stock ticker="TSLA" name="Tesla Inc" priceChange="42" />,
          size: 1,
        },
        {
          id: "c",
          content: (
            <Stock ticker="MSFT" name="Microsoft Corp" priceChange="-4" />
          ),
          size: 1,
        },
        { id: "e", content: <NoteList />, size: 2 },
        { id: "g", content: <MarketData />, size: 1 },
        {
          id: "d",
          content: <Stock ticker="AAPL" name="Apple Inc" priceChange="-14" />,
          size: 1,
        },

        { id: "f", content: <AdBiquidity />, size: 1 },

        { id: "h", content: <AdCharge />, size: 1 },

        { id: "k", content: <MemoryGame />, size: 1 },
        { id: "l", content: <Pet />, size: 1 },
      ],
    };
  }

  //Add new widgets from sidebar - Receive widgetType from SideBar.js
  handleWidget = (widgetType, widgetComponent) => {
    console.log(widgetType);
    let newWidget;
    if (widgetType === "NoteList") {
      newWidget = {
        id: this.generateRandomId(),
        content: widgetComponent,
        size: 2,
      };
    } else {
      newWidget = {
        id: this.generateRandomId(),
        content: widgetComponent,
        size: 1,
      };
    }
    this.setState({
      widgets: [newWidget, ...this.state.widgets],
    });
  };

  generateRandomId = () => {
    const newId = Math.floor(Math.random() * 10000);
    return newId;
  };

  //Update swapped widgets - Receive updated objects from Dashboard.js
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

  //Delete last widget in widgets (To be improved)
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
