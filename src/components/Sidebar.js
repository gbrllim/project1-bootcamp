import React from "react";
import Message from "./Stock";

export default class SideBar extends React.Component {
  render() {
    return (
      <div>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button border-none bg-slate-400 hover:bg-slate-600"
            >
              ⚙️
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className=" menu bg-base-200 text-base-content min-h-full w-60 p-4 opacity-80 md:w-[400px]">
              {/* Sidebar content here */}
              <li>
                <p>Customise</p>
              </li>
              <li>
                <h2>Input Stocks:</h2>
                <div className="flex flex-row">
                  <input type="text" className="left-0 right-0 w-3/5" />
                  <button className="left-0 right-0 w-1/5">Input</button>
                </div>
              </li>
              <li>
                <a>
                  <Message />
                </a>
              </li>
              <li>
                <a>
                  <Message />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
