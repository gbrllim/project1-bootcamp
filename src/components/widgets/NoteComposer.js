import React from "react";

export default class NoteComposer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1001, //this.props.notesLength,
      upvoteCount: 0,
      content: "",
    };
  }

  handleChange = (e) => {
    this.setState({ content: e.target.value, id: this.generateRandomId() });
  };

  generateRandomId = () => {
    const newId = Math.floor(Math.random() * 10000);
    return newId;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const note = this.state;
    this.props.addNote(note);
    console.log("Submitted:", this.state.content, this.state.id);
    this.setState({ content: "" });
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.handleSubmit(e);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className=" ml-3 mr-3 w-3/4 bg-transparent pl-3 text-xs hover:bg-yellow-400"
            type="text"
            name="content"
            placeholder="Enter to add new note"
            value={this.state.content}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          ></input>
        </form>
      </div>
    );
  }
}
