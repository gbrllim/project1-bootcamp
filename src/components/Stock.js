import React from "react";

export default class Stock extends React.Component {
  render() {
    return (
      <div
        className={`flex h-[160px] w-[160px] flex-col rounded-xl bg-white text-black hover:bg-slate-200 ${
          this.props.priceChange >= 0
            ? "bg-gradient-to-b from-green-500 to-green-300"
            : "bg-gradient-to-b from-red-500 to-red-300"
        }`}
      >
        <h1 className="p-3 pb-0 text-xl font-bold">{this.props.ticker}</h1>
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
  price: "$100,000",
  priceChange: 10,
};
