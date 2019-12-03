import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { counterWidget } from "../../constants/counterWidget";
import {
  increaseCounter,
  decreaseCounter,
  resetCounter
} from "../../actions/counter-widget-actions";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./styles.scss";

class CounterWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onInc = () => {
    this.props.increaseCounter(1);
  };

  onDec = () => {
    this.props.decreaseCounter(1);
  };

  onReset = () => {
    this.props.resetCounter();
  };

  render() {
    return (
      <div className="example my-5">
        <Container>
          <Link to="/home">{counterWidget.homePage}</Link>
          <Row>
            <Col sm>
              <b>{this.props.value}</b>
            </Col>
            <Col sm>
              <Button
                variant="primary"
                className="mx-3"
                onClick={() => this.onInc()}
              >
                {counterWidget.add}
              </Button>
              <Button
                variant="primary"
                className="mx-3"
                onClick={() => this.onDec()}
              >
                {counterWidget.sub}
              </Button>
            </Col>
            <Col sm>
              <p onClick={() => this.onReset()}>{counterWidget.reset}</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { value: state.counterwidget.value };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { increaseCounter, decreaseCounter, resetCounter },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterWidget);
