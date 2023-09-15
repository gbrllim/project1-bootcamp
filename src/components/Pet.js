import React from "react";
import astronaut from "../Icons/loop2.gif";

export default class Pet extends React.Component {
  render() {
    return (
      <div className=" h-full w-full ">
        <img
          src={astronaut}
          alt="astronaut"
          className="h-full rounded-xl object-cover "
        />
      </div>
    );
  }
}
