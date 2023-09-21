import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      timeZone: "Asia/Singapore",
    };
  }
  tick() {
    this.setState({
      time: new Date(),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // Teardown setInterval timer with timer ID saved as class variable
    clearInterval(this.timerId);
  }

  handleTimeZoneSelection = (event) => {
    const newTimeZone = event.target.value;
    this.setState({ timeZone: newTimeZone });
  };

  render() {
    return (
      <div className="flex h-[160px] w-[160px] flex-col items-center justify-center rounded-xl bg-purple-500 shadow-md">
        <section className="pb-1 text-center text-[32px] font-bold text-white">
          {this.state.time.toLocaleTimeString("en-GB", {
            timeZone: this.state.timeZone,
            hour12: true,
            hour: "numeric", // '2-digit' or 'numeric'
            minute: "2-digit", // 'numeric'
          })}
        </section>
        <section className="pb-3 text-center text-xs text-white">
          {this.state.time.toLocaleString("en-GB", {
            timeZone: this.state.timeZone,
            year: "numeric", // '2-digit' or 'numeric'
            month: "short", // 'short', 'narrow' or 'long'
            day: "numeric", // '2-digit' or 'numeric'
            weekday: "long",
          })}
        </section>
        <label htmlFor="time-zone"></label>
        <select
          name="time-zone"
          id="time-zone"
          onChange={this.handleTimeZoneSelection}
          className="rounded-lg bg-purple-600 p-1 text-xs text-slate-200"
        >
          <option value="Asia/Singapore">Asia/Singapore</option>
          <option value="Europe/London">Europe/London</option>
          <option value="America/New_York">America/New_York</option>
        </select>
      </div>
    );
  }
}
