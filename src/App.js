import React, { Component } from 'react';
import TimerContainer from './containers/TimerContainer'
import './css/bootstrap.min.css';
import './index.css';
import { Button, Grid, Row, Col, Clearfix } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={6} md-offest={3}>
            <TimerContainer />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
