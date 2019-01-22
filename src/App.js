import React, { Component } from "react";

import "./App.css";
import { Button, Input } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.operations = {
      SUM: 0,
      DIFFERENCE: 1,
      PRODUCT: 2,
      QUOTIENT: 3
    };

    this.state = {
      operation: this.operations.SUM,
      x: "",
      y: "",
      results: 0
    };

    this.x = 0;
    this.y = 0;
  }

  listenForChange = e => {
    if (e.target.name === "x") {
      this.setState({ x: e.target.value });
      this.x = parseInt(e.target.value);
    } else if (e.target.name === "y") {
      this.setState({ y: e.target.value });
      this.y = parseInt(e.target.value);
    }

    if (this.state.operation === this.operations.SUM) {
      this.setState({ results: this.x + this.y });
    } else if (this.state.operation === this.operations.DIFFERENCE) {
      this.setState({ results: this.x - this.y });
    } else if (this.state.operation === this.operations.PRODUCT) {
      this.setState({ results: this.x * this.y });
    } else if (this.state.operation === this.operations.QUOTIENT) {
      this.setState({ results: this.x / this.y });
    }
  };

  equals = e => {
    if (e.key === "Enter") {
      this.x = this.state.results;
      this.y = 0;
      this.setState({ x: this.x, y: "" });
    }
  };

  plus = () => {
    if (this.y !== "") {
    }
    this.setState({ operation: this.operations.SUM });
  };

  minus = () => {
    this.setState({ operation: this.operations.DIFFERENCE });
  };

  mult = () => {
    this.setState({ operation: this.operations.PRODUCT });
  };

  div = () => {
    this.setState({ operation: this.operations.QUOTIENT });
  };

  render() {
    return (
      <div className="App">
        <Input
          placeholder="0"
          name="x"
          onChange={this.listenForChange}
          onKeyPress={this.equals}
          value={this.state.x}
        />
        <Input
          placeholder="0"
          name="y"
          onChange={this.listenForChange}
          onKeyPress={this.equals}
          value={this.state.y}
        />
        <Button onClick={this.plus}>+</Button>
        <Button onClick={this.minus}>-</Button>
        <Button onClick={this.mult}>x</Button>
        <Button onClick={this.div}>÷</Button>

        <h1>{this.state.results}</h1>
      </div>
    );
  }
}

export default App;
