import React from "react";
import biquidity from "../../Icons/biquidity.png";

export default class AdBiquidity extends React.Component {
  render() {
    return (
      <div className=" h-[160px] w-[160px] rounded-xl shadow-md ">
        <a href="https://game.biquidity.com/">
          <img
            src={biquidity}
            alt="biquidity"
            className="h-full rounded-xl object-cover "
          />
        </a>
      </div>
    );
  }
}
