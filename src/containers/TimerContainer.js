import React, {Component} from 'react';

class TimerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: true,
      startTime: null,
      elapsed: null
    };

    this.handleClick = this.handleClick.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleClick() {
    if(this.state.timerStart) {
      this.setState(prevState => ({
        timerStart: !prevState.timerStart,
        startTime: new Date()
      }))
      this.ticker = setInterval(this.tick, 1000);
    } else {
      clearInterval(this.ticker);
      this.setState(prevState => ({
        timerStart: !prevState.timerStart,
        elapsed: null
      }));

    }
  }

  tick() {
    console.log("tick");
    this.setState({
      elapsed: new Date() - this.state.startTime
    })
  }

  render() {
    let timer = 25*60 - Math.round(this.state.elapsed / 1000);
    return (
      <div>
        Seconds: {timer}
      <button onClick={this.handleClick}>
        {this.state.timerStart ? 'Start' : 'Reset'}
      </button>
    </div>
    );
  }
}

export default TimerContainer;
