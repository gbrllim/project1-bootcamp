import React from "react";

export default class Stock extends React.Component {
  render() {
    return (
      <div
        className={`flex h-[160px] w-[160px] flex-col rounded-xl bg-white text-black shadow-md hover:bg-slate-200 ${
          this.props.priceChange >= 0
            ? "bg-gradient-to-t from-green-500 to-green-300"
            : "bg-gradient-to-t from-red-500 to-red-300"
        }`}
      >
        <form>
          <input
            type="text"
            className="w-[80px] bg-transparent pb-0 pl-3 pt-1 text-xl font-bold"
          ></input>
        </form>
        <h1 className="pb-0 pl-3 pt-0 text-xl font-bold">
          {this.props.ticker}
        </h1>
        <h1 className="pl-3 text-sm">{this.props.name}</h1>
        <p className="pl-3 text-xl">{this.props.price}</p>
        <p className="pl-3 text-[18px]">
          {this.props.priceChange >= 0 ? "📈" : "📉"} {this.props.priceChange}%
        </p>
      </div>
    );
  }
}
// Setting default value for props
Stock.defaultProps = {
  ticker: "BTC",
  name: "Bitcoin",
  price: "$100,000",
  priceChange: 10,
};
