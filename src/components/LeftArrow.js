import React, { Component } from "react";
class LeftArrow extends Component {
  handleClick() {
    {
      console.log("I am form left");
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>LEFT</button>
      </div>
    );
  }
}

export default LeftArrow;
