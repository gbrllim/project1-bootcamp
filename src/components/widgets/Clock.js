import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderHourMarkings() {
    const hourMarkings = [];

    for (let i = 1; i <= 12; i++) {
      hourMarkings.push(
        <div
          key={i}
          className="hour-marking"
          style={{ transform: `rotate(${(i - 1) * 30}deg)` }}
        >
          {i}
        </div>,
      );
    }

    return hourMarkings;
  }

  render() {
    const { time } = this.state;
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const secondDeg = (seconds / 60) * 360;
    const minuteDeg = ((minutes + seconds / 60) / 60) * 360;
    const hourDeg = (((hours % 12) + minuteDeg / 360) / 12) * 360;

    return (
      <div className="AnalogClock">
        <div
          className="hand hour-hand"
          style={{ transform: `rotate(${hourDeg}deg)` }}
        ></div>
        <div
          className="hand minute-hand"
          style={{ transform: `rotate(${minuteDeg}deg)` }}
        ></div>
        <div
          className="hand second-hand"
          style={{ transform: `rotate(${secondDeg}deg)` }}
        ></div>
        <div className="clock-face">{this.renderHourMarkings()}</div>
      </div>
    );
  }
}

export default Clock;
