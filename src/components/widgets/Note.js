import React from "react";

export default class Note extends React.Component {
  handleCheckboxChange = () => {
    this.props.deleteNote(this.props.id);
  };

  render() {
    return (
      <div className=" w-full rounded-xl bg-yellow-300 text-black shadow-md ">
        <ul className="m-1 pl-1 text-sm transition delay-300 ease-in-out ">
          <li className="flex items-center justify-between  hover:bg-yellow-400 ">
            <div>
              <input
                type="checkbox"
                className="mr-1"
                onChange={this.handleCheckboxChange}
              />
              <span>{this.props.content} </span>
            </div>
            <div>
              <span className="mr-1">{this.props.upvoteCount}</span>
              <button
                className=""
                onClick={() => this.props.upvote(this.props.id)}
              >
                ▲
              </button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
