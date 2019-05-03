import React, { Component } from "react";
class RightArrow extends Component {
  handleClick() {
    {
      console.log("I am form right");
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>RIGHT</button>
      </div>
    );
  }
}

export default RightArrow;
