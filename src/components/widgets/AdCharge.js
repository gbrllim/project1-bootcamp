import React from "react";
import charge from "../../Icons/charge.png";

export default class AdCharge extends React.Component {
  render() {
    return (
      <div className=" h-[160px] w-[160px] rounded-xl shadow-md ">
        <a href="https://game.biquidity.com/" target="_blank" rel="noreferrer">
          <img
            src={charge}
            alt="charge"
            className="h-full rounded-xl object-cover "
          />
        </a>
      </div>
    );
  }
}
