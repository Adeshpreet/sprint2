import "../App.css";
import React, { Component } from "react";

export default class lifecycle extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  componentDidMount() {
    console.log("Component Mounted");
  }
  componentDidUpdate() {
    console.log("Component Updated");
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div className="middle">
        <h1>Class Component Counter</h1>
        <h1>{this.state.count}</h1>
        <div>
          <button onClick={this.increment}>Increase Count</button>
          <button onClick={this.reset}>Reset to 0</button>
          <button onClick={this.decrement}>Decrease Count</button>
        </div>
      </div>
    );
  }
}
