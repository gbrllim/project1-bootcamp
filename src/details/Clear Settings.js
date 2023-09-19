import React from "react";

export default class ClearSettings extends React.Component {
  handleClearLocalStorage = () => {
    localStorage.clear();
  };

  render() {
    return (
      <div className="flex h-9 w-[160px] items-center justify-center rounded-lg bg-slate-500 pl-3 pr-3 hover:bg-slate-600">
        <button
          onClick={this.handleClearLocalStorage}
          className="text-slate-100"
        >
          Reset to default
        </button>
      </div>
    );
  }
}
