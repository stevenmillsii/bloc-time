import React, {Component} from 'react';
import { Button, Grid, Row, Col, Clearfix } from 'react-bootstrap';
import ToggleDisplay from 'react-toggle-display';
import '../index.css';


class TimerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: true,
      startTime: null,
      elapsed: null,
      show: true,
      workTimer: true,
      workTime: 25,
      breakTime: 5
    };

    this.handleClick = this.handleClick.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleClick() {
    if(this.state.timerStart) {
      this.setState(prevState => ({
        timerStart: !prevState.timerStart,
        startTime: new Date(),
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
    const timerType = this.state.workTimer ? "work" : "break";
    if(this.state[timerType+"Time"]*60 - Math.round(this.state.elapsed / 1000) <= 0) {
      clearInterval(this.ticker);
      this.setState({
        workTimer: !this.state.workTimer,
        startTime: new Date()
      });
      this.ticker = setInterval(this.tick, 1000);
    }
    this.setState({
      elapsed: new Date() - this.state.startTime
    })
  }

  render() {
    var timer = 25*60 - Math.round(this.state.elapsed / 1000);
    var onBreak = 5*60 - Math.round(this.state.elapsed / 1000);

    return (
      <div>
          <ToggleDisplay if={this.state.workTimer}>
            <h2>{timer}</h2>
            <Button bsSize="large" onClick={this.handleClick}>
              {this.state.timerStart ? 'Start' : 'Reset'}
            </Button>
        </ToggleDisplay>
        <ToggleDisplay if={!this.state.workTimer}>
          <h2>{onBreak}</h2>
          <Button bsSize="large" onClick={this.handleClick}>
            {this.state.timerStart ? 'Start' : 'Reset'}
          </Button>
        </ToggleDisplay>
      </div>
    );
  }
}

export default TimerContainer;
