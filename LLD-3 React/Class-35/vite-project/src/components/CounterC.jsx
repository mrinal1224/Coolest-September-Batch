import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0, text: "Adam" };
  }

  render() {
    return (
      <div>
        <p>Count : {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count+1 })}>
          Inc
        </button>
      </div>
    );
  }
}

export default Counter;
