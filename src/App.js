//----------React----------//
import React from "react";

//----------Widgets----------//
import Stock from "./components/widgets/Stock";
import Pet from "./components/widgets/Pet";
import Note from "./components/widgets/Note";
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
        { id: "g", content: <Pet />, size: 1 },
        // {
        //   id: "a",
        //   content: (
        //     <Stock
        //       ticker="TSLA"
        //       name="Tesla Inc"
        //       price="$1,337"
        //       priceChange="42"
        //     />
        //   ),
        //   size: 1,
        // },
        {
          id: "b",
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
        // {
        //   id: "c",
        //   content: (
        //     <Stock
        //       ticker="ETH"
        //       name="Ethereum"
        //       price="$420"
        //       priceChange="-14"
        //     />
        //   ),
        //   size: 1,
        // },
        { id: "h", content: <Note />, size: 2 },
        { id: "d", content: "News", size: 1 },
        { id: "f", content: <Pet />, size: 1 },
        { id: "e", content: "News", size: 1 },
        // { id: "k", content: "Youtube", size: 1 },
        // { id: "i", content: "Notes", size: 1 },
        { id: "j", content: "Clock", size: 1 },
      ],
    };
  }

  //Receive widgetType from SideBar.js and add newWidget to widgets
  handleWidget = (widgetType) => {
    console.log(widgetType);

    const newWidget = {
      id: Math.floor(Math.random() * 100),
      content: widgetType, // Assuming widgetType is a string
      size: 1,
    };

    this.setState(
      {
        widgets: [newWidget, ...this.state.widgets],
      },
      () => {
        console.log(newWidget);
        console.log(this.state.widgets);
      },
    );
  };

  updateWidget = (updatedWidgets) => {
    console.log(updatedWidgets);
    this.setState(
      {
        widgets: updatedWidgets,
      },
      () => {
        console.log("Final Widgets", this.state.widgets);
      },
    );
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

        <footer className="fixed bottom-0 w-full bg-sky-100 p-2 text-center shadow-md">
          <p className="text-xs text-slate-700">Made by Gabriel Lim 🐷</p>
        </footer>
      </div>
    );
  }
}

export default App;
