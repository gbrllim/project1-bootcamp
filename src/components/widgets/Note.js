import React from "react";

export default class Note extends React.Component {
  render() {
    return (
      <div className="h-[160px] w-[160px] rounded-xl bg-yellow-300 text-black shadow-md ">
        <header className="flex flex-row rounded-t-xl bg-yellow-500">
          <h1 className="w-full p-1 text-sm font-bold">Notes</h1>
        </header>

        <ul className="m-1 pl-1 text-sm">
          <li className="m-1">
            <input type="checkbox" className="mr-1" />
            Make touch work!!!!
          </li>
          <li className="m-1">
            <input
              type="checkbox"
              defaultChecked
              className="mr-1 bg-slate-200"
            />
            Drag widgets from the sidebar
          </li>
        </ul>
        <footer className="relative">
          <button className="">+</button>
        </footer>
      </div>
    );
  }
}
