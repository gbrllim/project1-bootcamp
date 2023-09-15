import React from "react";
import Pet from "./Pet";
import Stock from "./Stock";

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
              className="btn btn-primary drawer-button h-10 min-h-0 w-10 border-slate-300 bg-slate-500 p-0 hover:bg-slate-600"
            >
              ⚙️
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className=" menu text-base-content min-h-full w-60 bg-slate-200 p-3 opacity-90 md:w-[400px]">
              {/* Sidebar content here */}
              <li>
                <h2 className="text-slate-700">Add Widgets:</h2>
              </li>
              <li>
                <div>
                  <Pet />
                </div>
              </li>
              <li>
                <div>
                  <Stock />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
