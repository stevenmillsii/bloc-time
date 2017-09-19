import React, { Component } from 'react';
import TimerContainer from './containers/TimerContainer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="col-md-9 centered">
            <TimerContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
