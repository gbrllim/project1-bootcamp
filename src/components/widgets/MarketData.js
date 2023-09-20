import React from "react";
// const puppeteer = require("puppeteer");

export default class MarketData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: "AAPL",
      priceTarget: 199,
    };
  }

  // componentDidMount() {
  //   console.log("Hello 0");
  //   this.scrapeYahooFinance();
  //   console.log("Hello 1");
  // }

  // async scrapeYahooFinance() {
  //   const { ticker } = this.state.ticker;
  //   console.log("Hello 2");

  //   const browser = await puppeteer.launch();
  //   const page = await browser.newPage();

  //   // Navigate to the Yahoo Finance page for the specified ticker
  //   await page.goto(`https://sg.finance.yahoo.com/quote/${ticker}`);

  //   // Wait for the element to become visible
  //   await page.waitForSelector('[data-test="analyst-avg-tg"]');

  //   console.log("Hello 3");

  //   // Extract the text content of the element
  //   const analystAvgTargetValue = await page.$eval(
  //     '[data-test="analyst-avg-tg"] span:nth-child(2)',
  //     (element) => {
  //       return element.textContent;
  //     },
  //   );

  //   // Set the extracted value to the state
  //   this.setState({ priceTarget: analystAvgTargetValue });

  //   // Close the browser
  //   await browser.close();
  // }

  render() {
    return (
      <div className=" flex h-[160px] w-[160px] flex-col items-center justify-between rounded-xl bg-slate-800 p-3 shadow-md ">
        <h1 className="  rounded-md bg-teal-900 text-center text-sm font-bold">
          Analyst Price Estimate:
        </h1>
        <p className="text-[32px] font-bold text-slate-100">
          ${this.state.priceTarget}
        </p>
        <div className="text-center">
          <p className="w-[70px] rounded-md bg-slate-700">
            {this.state.ticker}
          </p>
          <p className=" text-xs">Apple Inc.</p>
        </div>
      </div>
    );
  }
}
