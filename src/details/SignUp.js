import React from "react";

export default class SignUp extends React.Component {
  // handleUpdateLocalStorage = () => {
  //   localStorage.setItem("test", "testkey");
  // };

  render() {
    return (
      <div className="flex h-10 w-[80px] items-center justify-center rounded-lg border-2 border-slate-700 bg-slate-500 pl-3 pr-3 hover:bg-slate-600">
        <button
          // onClick={this.handleUpdateLocalStorage}
          className="text-slate-100"
        >
          Sign In
        </button>
      </div>
    );
  }
}
