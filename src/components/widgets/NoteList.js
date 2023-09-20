import React from "react";
import Note from "./Note";
import NoteComposer from "./NoteComposer";

export default class NoteList extends React.Component {
  constructor(props) {
    super(props);

    const storedNotes = localStorage.getItem("notes");
    this.state = {
      notes: storedNotes
        ? JSON.parse(storedNotes)
        : [
            {
              id: 0,
              upvoteCount: 1,
              content: "Check out Biquidity game!",
            },
            {
              id: 1,
              upvoteCount: 2,
              content: "Buy 100 Shares of AAPL at $8",
            },
          ],
    };
  }

  saveNotesToLocalStorage = () => {
    localStorage.setItem("notes", JSON.stringify(this.state.notes));
  };

  componentDidMount = () => {
    // Load notes data from local storage when the component mounts
    this.saveNotesToLocalStorage();
  };

  componentDidUpdate = () => {
    // Save notes data to local storage when the component updates
    this.saveNotesToLocalStorage();
  };

  handleUpvote = (id) => {
    const index = this.state.notes.findIndex((notes) => notes.id === id);
    const note = this.state.notes.filter((notes) => notes.id === id)[0];
    note.upvoteCount += 1;

    const newArray = [...this.state.notes];
    newArray.splice(index, 1, note);
    this.setState({ notes: newArray });
  };

  addNewNote = (note) => {
    let newArray = [...this.state.notes, note];
    this.setState({
      notes: newArray,
    });
  };

  deleteNote = (id) => {
    const index = this.state.notes.findIndex((notes) => notes.id === id);
    const newArray = [...this.state.notes];
    newArray.splice(index, 1);
    this.setState({ notes: newArray });
  };

  render() {
    let sorted = this.state.notes.sort((a, b) => b.upvoteCount - a.upvoteCount);

    return (
      <div className="h-[160px] w-full overflow-scroll rounded-xl bg-yellow-300 text-black shadow-md ">
        <header className="flex flex-row rounded-t-xl bg-yellow-500">
          <h1 className="w-full p-1 pl-3 text-sm font-bold">Notepad</h1>
        </header>
        <section>
          {sorted.map((notes) => (
            <Note
              upvote={this.handleUpvote}
              deleteNote={this.deleteNote}
              key={notes.id}
              {...notes}
            />
          ))}
        </section>
        <section>
          <NoteComposer
            addNote={this.addNewNote}
            notesLength={this.state.notes.length}
          />
        </section>
      </div>
    );
  }
}
