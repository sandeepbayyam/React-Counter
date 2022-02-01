import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  dec = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.inc}>Increment</button>
        &nbsp;&nbsp;
        <button onClick={this.dec}> Decrement </button>
      </div>
    );
  }
}
export default App;
