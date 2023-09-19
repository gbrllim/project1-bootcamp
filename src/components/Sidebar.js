import React from "react";
import Pet from "./widgets/Pet";
import Stock from "./widgets/Stock";
import ClearSettings from "../details/Clear Settings";
import Note from "./widgets/Note";

export default class SideBar extends React.Component {
  handleDragStart = (e, widgetType) => {
    e.dataTransfer.setData("widgetType", widgetType);
  };

  render() {
    return (
      <div>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button h-10 min-h-0 w-[80px] border-slate-700 bg-slate-500 p-0 text-xl hover:bg-slate-600"
            >
              ⚙️
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className=" menu min-h-full w-60 bg-slate-200 p-3 text-base-content opacity-90">
              {/* Sidebar content here */}
              <li>
                <h2 className="text-slate-700 disabled:hover">Add Widgets:</h2>
              </li>
              <li>
                <div
                  draggable
                  onDragStart={(e) => this.handleDragStart(e, "Pet")}
                >
                  <Pet />
                </div>
              </li>
              <li>
                <div>
                  <Stock className="draggable" />
                </div>
              </li>
              <li>
                <div>
                  <Note />
                </div>
              </li>
              <li className="ml-4">
                <ClearSettings />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
