import React from "react";
import moneyPrinter from "../Icons/brr.gif";

export default class StartScreen extends React.Component {
  componentDidMount() {
    document.getElementById("my_modal_1").close();
    document.getElementById("my_modal_1").showModal();
  }

  render() {
    return (
      <div className="">
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box bg-sky-900">
            <img src={moneyPrinter} alt="brr" className="rounded-xl" />
            <h3 className="mt-4 font-bold text-slate-100 first-letter:text-lg">
              Welcome to Investronaut!
            </h3>
            <div className=" modal-action mt-5">
              <p className="pb-4 text-slate-100">
                This is the ultimate place when investors can get up to date
                live information across various sources Ready to begin your
                journey? <br></br>How to make the most of Investronaut? Step 1:
                Buy stonks Step 2: ???? Step 3: PROFIT!
              </p>
            </div>
            <div className="flex justify-center">
              <form method="dialog">
                <button className="btn bg-slate-400 text-slate-500 hover:bg-green-400 hover:text-slate-700">
                  BULLISH
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    );
  }
}
