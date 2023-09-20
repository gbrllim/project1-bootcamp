import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
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
    this.props.onTimeZoneChange(newTimeZone);
  };

  render() {
    return (
      <div className="h-[160px] w-[160px] rounded-xl bg-purple-400 shadow-md">
        <section>
          {this.state.time.toLocaleTimeString("en-GB", {
            timeZone: this.props.timeZone,
          })}
        </section>
        <label htmlFor="time-zone"></label>
        <select
          name="time-zone"
          id="time-zone"
          onChange={this.handleTimeZoneSelection}
        >
          <option value="Asia/Singapore">Asia/Singapore</option>
          <option value="Europe/London">Europe/London</option>
          <option value="America/New_York">America/New_York</option>
        </select>
      </div>
    );
  }
}
