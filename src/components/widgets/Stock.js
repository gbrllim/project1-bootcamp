import React from "react";
//----------Notes----------//
//polygon.io/dashboard for API information
//Max 5 API calls a min

export default class Stock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      previousClose: null,
      apiKey: "PHM0L63YrTJrV2vPZWhvCatzmXRG7Hme",
      symbol: this.props.ticker,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const { symbol, apiKey } = this.state;
      const response = await fetch(
        `https://api.polygon.io/v2/aggs/ticker/${symbol}/prev?adjusted=true&apiKey=${apiKey}`,
      );

      // Check if the response is successful
      if (response.ok) {
        const data = await response.json();
        const close = data.results[0]?.c;
        console.log(close);
        this.setState({ previousClose: close });
      } else {
        // Handle error here if needed
        console.error("Failed to fetch data:", response.status);
      }
    } catch (error) {
      // Handle network or other errors here
      console.error("Error:", error);
    }
  };

  render() {
    const { previousClose } = this.state;
    const { ticker, name, priceChange } = this.props;
    return (
      <div
        className={`flex h-[160px] w-[160px] flex-col rounded-xl bg-white text-black shadow-md hover:bg-slate-200 ${
          this.props.priceChange >= 0
            ? "bg-gradient-to-t from-green-500 to-green-300"
            : "bg-gradient-to-t from-red-500 to-red-300"
        }`}
      >
        <h1 className="pb-0 pl-3 pt-3 text-xl font-bold">{ticker}</h1>
        <h1 className="pl-3 text-sm">{name}</h1>
        <p className="pl-3 text-xl">
          <p className="pl-0 text-xl">
            {previousClose !== null ? `$${previousClose}` : "No data"}
          </p>
        </p>
        <p className="pl-3 text-[18px]">
          {this.props.priceChange >= 0 ? "📈" : "📉"} {priceChange}%
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
