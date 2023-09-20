import React from "react";
import astronaut from "../../Icons/loop2.gif";

export default class Pet extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     rotation: 0, // Initialize the rotation to 0 degrees
  //   };
  // }

  // rotate = () => {
  //   this.setState((prevState) => ({
  //     rotation: prevState.rotation + 90, // Rotate by 90 degrees each time
  //   }));
  // };

  render() {
    // const { rotation } = this.state;

    return (
      <div className=" h-[160px] w-[160px] rounded-xl shadow-md ">
        <img
          src={astronaut}
          alt="astronaut"
          className="h-full rounded-xl object-cover "
          // style={{ transform: `rotate(${rotation}deg)` }}
          // onClick={this.rotate}
        />
      </div>
    );
  }
}
