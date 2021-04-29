import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("update title ");
      document.title = `Clicked ${this.state.count} times`;
    }
  }
  // must to bind this
  //   onIncrement() {
  //     this.setState({
  //       count: this.state.count + 1,
  //     });
  //   }

  onIncrement = () => {
    // this.setState({
    //   count: this.state.count + 1,
    // });
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onIncrement}>Count {this.state.count}</button>
      </div>
    );
  }
}

export default ClassCounter;
