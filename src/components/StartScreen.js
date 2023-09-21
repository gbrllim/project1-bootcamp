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
        <button
          className="btn h-12 border-0 bg-sky-900 text-xl font-bold normal-case text-slate-100 hover:animate-pulse hover:bg-sky-900 "
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          My Dashboard 🔭
        </button>

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box flex flex-col justify-center bg-sky-900">
            <img src={moneyPrinter} alt="brr" className="rounded-xl" />
            <h3 className=" mt-4 font-bold text-slate-100">
              Welcome to Investronaut!
            </h3>
            <div className=" modal-action mt-5 flex flex-col">
              <p className="pb-1 text-slate-100">
                Snappy, Swift and Specialised - Investronaut holds access to the
                entire market in your pocket, making it easy for you to get
                their daily dose of market updates in a glance!
              </p>
              <ul className="pb-1 text-slate-100">
                <li>• Live information pulled from reliable sources</li>
                <li>• Add new widgets from the sidebar</li>
                <li>• Drag & Drop your dashboard</li>
                <li>• Works on any platform</li>
              </ul>
              <p className="pb-1 font-bold text-slate-100">
                Ready to begin your journey?
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
