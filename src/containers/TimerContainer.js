import React, {Component} from 'react';

class TimerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {timerStart: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      timerStart: !prevState.timerStart
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.timerStart ? 'Start' : 'Reset'}
      </button>
    );
  }
}

export default TimerContainer;
