import React, { Component } from 'react';
import moment from 'moment';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = { timeDisplay: moment(this.props.time).fromNow() };
  }

  componentDidMount() {
    // update display every second
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState({ timeDisplay: moment(this.props.time).fromNow() });
  }

  render() {
    return <span>{this.state.timeDisplay.toString()}</span>
  }
}

export default Time;
