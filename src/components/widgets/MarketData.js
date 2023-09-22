import React from "react";
export default class MarketData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: "AAPL",
      priceTarget: 199,
    };
  }

  render() {
    return (
      <div className=" flex h-[160px] w-[160px] flex-col items-center justify-between rounded-xl bg-slate-800 p-3 shadow-md ">
        <h1 className="  rounded-md bg-teal-700 text-center text-sm font-bold">
          Analyst Price Estimate:
        </h1>
        <p className="text-[32px] font-bold text-slate-100">
          ${this.state.priceTarget}
        </p>
        <div className="text-center text-slate-300">
          <p className="w-[70px] rounded-md bg-slate-600">
            {this.state.ticker}
          </p>
          <p className=" text-xs ">Apple Inc.</p>
        </div>
      </div>
    );
  }
}
