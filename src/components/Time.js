// @flow

import React, { Component } from 'react';
import moment from 'moment';

type Props = {
  time: Date,
};

type State = {
  timeDisplay: string,
};

class Time extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { timeDisplay: moment(props.time).fromNow() };
  }

  componentDidMount() {
    // update display every second
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  interval: ?number;

  tick = () => {
    this.setState({ timeDisplay: moment(this.props.time).fromNow() });
  }

  render() {
    return <span>{this.state.timeDisplay}</span>;
  }
}

export default Time;
