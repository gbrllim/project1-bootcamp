import React from "react";

export default class Stock extends React.Component {
  render() {
    return (
      <div className="text-1/2 flex h-full w-full flex-col items-center justify-center rounded-xl bg-white text-black hover:bg-slate-200">
        <h1 className="font-bold">{this.props.ticker}</h1>
        <p>{this.props.price}</p>
        <p
          className={`text-sm ${
            this.props.priceChange >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {this.props.priceChange >= 0 ? "📈" : "📉"} {this.props.priceChange}%
        </p>
      </div>
    );
  }
}
