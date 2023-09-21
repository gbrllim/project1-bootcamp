//----------React----------//
import React from "react";

//----------Details----------//
import ClearSettings from "../details/Clear Settings";

//----------Widgets----------//
import Pet from "./widgets/Pet";
import Stock from "./widgets/Stock";
import NoteList from "./widgets/NoteList";
import Clock from "./widgets/Clock";

//----------Icons----------//
import note from "../Icons/note.png";

export default class SideBar extends React.Component {
  render() {
    return (
      <div>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Drawer Button Trigger */}
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button h-12 min-h-0 w-[80px] border-0 bg-sky-900 p-0 text-xl hover:animate-pulse hover:bg-sky-900"
            >
              ⚙️
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className=" menu min-h-full w-60 bg-slate-200 p-3 pb-10 text-base-content opacity-90">
              {/* Sidebar content - add onClick for it to add to main dashboard */}
              <li>
                <h2 className="text-slate-700 hover:bg-transparent">
                  Add Widgets:
                </h2>
              </li>
              <li>
                <div onClick={() => this.props.widget(<Pet />)}>
                  <Pet />
                </div>
              </li>
              <li>
                <div onClick={() => this.props.widget(<Stock />)}>
                  <Stock />
                </div>
              </li>
              <li>
                <div onClick={() => this.props.widget(<NoteList />)}>
                  <img
                    className="h-[160px] w-[160px] rounded-xl"
                    src={note}
                    alt="note"
                  />
                </div>
              </li>
              <li>
                <div onClick={() => this.props.widget(<Clock />)}>
                  <Clock />
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
