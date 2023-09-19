import React from "react";

export default class SignUp extends React.Component {
  // handleUpdateLocalStorage = () => {
  //   localStorage.setItem("test", "testkey");
  // };

  render() {
    return (
      <div className="flex h-12 w-[80px] items-center justify-center rounded-lg  border-0 bg-sky-900 pl-3 pr-3 hover:animate-pulse hover:bg-sky-900">
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
