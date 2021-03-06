import React, { Component } from "react";

class ClassMouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }
  //
  logMousePosition = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };
  componentDidMount() {
    window.addEventListener("mousemove", this.logMousePosition);
  }
  componentWillMount() {
    window.removeEventListener("mousemove", this.logMousePosition);
  }
  //
  render() {
    return (
      <div>
        <p>{this.state.x}</p>
        <p>{this.state.y}</p>
      </div>
    );
  }
}

export default ClassMouse;
